// 代码块一键复制按钮
// 为 highlight.js 生成的 figure.highlight 添加一个复制按钮（由主题配置 tool.copyCode 控制是否加载）
(function () {
    function getCodeText(figure) {
        var codeArea = figure.querySelector('.code pre') || figure.querySelector('pre');
        if (!codeArea) {
            return '';
        }
        // 去掉结尾多余的换行
        return codeArea.innerText.replace(/\n+$/, '');
    }

    function copyToClipboard(text) {
        if (navigator.clipboard && window.isSecureContext) {
            return navigator.clipboard.writeText(text);
        }
        return new Promise(function (resolve, reject) {
            var textarea = document.createElement('textarea');
            textarea.value = text;
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.select();
            try {
                document.execCommand('copy') ? resolve() : reject();
            } catch (e) {
                reject(e);
            }
            document.body.removeChild(textarea);
        });
    }

    function addButton(figure) {
        if (figure.querySelector('.copy-code-btn')) {
            return;
        }
        var button = document.createElement('button');
        button.type = 'button';
        // darkmode-ignore：避免被暗黑模式插件反转颜色
        button.className = 'copy-code-btn darkmode-ignore';
        button.textContent = '复制';
        button.addEventListener('click', function () {
            copyToClipboard(getCodeText(figure)).then(function () {
                button.textContent = '已复制';
                button.classList.add('copied');
                setTimeout(function () {
                    button.textContent = '复制';
                    button.classList.remove('copied');
                }, 2000);
            }).catch(function () {
                button.textContent = '复制失败';
                setTimeout(function () {
                    button.textContent = '复制';
                }, 2000);
            });
        });
        figure.appendChild(button);
    }

    function init() {
        var figures = document.querySelectorAll('figure.highlight');
        for (var i = 0; i < figures.length; i++) {
            addButton(figures[i]);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
