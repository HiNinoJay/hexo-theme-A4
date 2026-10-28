// Mermaid 图表渲染
// 将文章中的 ```mermaid 代码块替换为渲染后的 SVG 图表（由主题配置 mermaid.enable 控制是否加载）
(function () {
    // 图表主题来自主题配置 mermaid.theme，由 layout.ejs 注入 window.A4_MERMAID_THEME
    var DEFAULT_THEME = 'default';

    function currentTheme() {
        // darkreader（暗黑模式）生效时使用 dark 主题，保证图表与页面风格一致
        var dark = typeof DarkReader !== 'undefined' && DarkReader.isEnabled();
        return dark ? 'dark' : (window.A4_MERMAID_THEME || DEFAULT_THEME);
    }

    // 提取代码块源码；figure 内优先取 .code pre，避开 gutter 行号与语言标注
    function getCodeText(block) {
        var codeArea = block.tagName === 'FIGURE'
            ? (block.querySelector('.code pre') || block.querySelector('pre'))
            : block;
        return codeArea ? codeArea.innerText.replace(/\n+$/, '') : '';
    }

    // 把 hexo 渲染出的 mermaid 代码块替换为渲染容器（兼容 figure.highlight 与 pre > code 两种输出）
    function wrapBlocks() {
        var blocks = document.querySelectorAll('figure.highlight.mermaid, pre > code.language-mermaid, pre > code.mermaid');
        for (var i = 0; i < blocks.length; i++) {
            var source = getCodeText(blocks[i]);
            if (!source) {
                continue;
            }
            var container = document.createElement('div');
            // darkmode-ignore：图表配色由 mermaid 主题接管，避免被暗黑模式插件二次调色
            container.className = 'mermaid-container darkmode-ignore';
            // 保存源码，供暗黑模式切换后以新主题重渲染
            container.setAttribute('data-source', source);
            blocks[i].parentNode.replaceChild(container, blocks[i]);
        }
    }

    // 渲染或重渲染页面上所有 mermaid 图表
    function render() {
        if (typeof mermaid === 'undefined') {
            return;
        }
        wrapBlocks();
        var containers = document.querySelectorAll('.mermaid-container');
        var nodes = [];
        for (var i = 0; i < containers.length; i++) {
            var source = containers[i].getAttribute('data-source');
            if (!source) {
                continue;
            }
            var target = document.createElement('div');
            target.className = 'mermaid';
            target.textContent = source;
            containers[i].innerHTML = '';
            containers[i].appendChild(target);
            nodes.push(target);
        }
        if (!nodes.length) {
            return;
        }
        try {
            mermaid.initialize({ startOnLoad: false, theme: currentTheme() });
            var result = mermaid.run({ nodes: nodes });
            if (result && typeof result.catch === 'function') {
                // 图表源码非法等渲染失败不阻断页面其余功能
                result.catch(function () { });
            }
        } catch (e) { /* 同上 */ }
    }

    // 供暗黑模式切换后重新渲染（layout.ejs 的暗黑切换按钮会调用）
    window.A4RenderMermaid = render;

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', render);
    } else {
        render();
    }
})();
