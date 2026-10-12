// 移动端抽屉式目录
// 小屏幕下用左下角按钮呼出抽屉展示文章目录（由主题配置 tool.mobileToc 控制是否加载）
(function () {
    var HEADINGS = 'h1,h2,h3,h4';

    function buildList(container) {
        var headings = container.querySelectorAll(HEADINGS);
        if (!headings.length) {
            return null;
        }
        var list = document.createElement('ul');
        for (var i = 0; i < headings.length; i++) {
            var heading = headings[i];
            if (!heading.id) {
                // 部分渲染器不会给标题加 id，这里补一个，保证锚点可跳转
                heading.id = 'mobile-toc-' + i;
            }
            var item = document.createElement('li');
            var link = document.createElement('a');
            link.className = 'mobile-toc-link mobile-toc-' + heading.tagName.toLowerCase();
            link.href = '#' + heading.id;
            link.textContent = heading.textContent;
            item.appendChild(link);
            list.appendChild(item);
        }
        return list;
    }

    function create(container) {
        var list = buildList(container);
        if (!list) {
            return;
        }

        var button = document.createElement('button');
        button.type = 'button';
        button.id = 'mobile-toc-btn';
        button.className = 'darkmode-ignore';
        button.textContent = '目录';
        button.setAttribute('aria-label', '目录');

        var mask = document.createElement('div');
        mask.id = 'mobile-toc-mask';

        var drawer = document.createElement('div');
        drawer.id = 'mobile-toc-drawer';
        drawer.className = 'darkmode-ignore';
        var title = document.createElement('div');
        title.className = 'mobile-toc-title';
        title.textContent = '目录';
        drawer.appendChild(title);
        drawer.appendChild(list);

        document.body.appendChild(mask);
        document.body.appendChild(drawer);
        document.body.appendChild(button);

        function close() {
            drawer.classList.remove('mobile-toc-open');
            mask.classList.remove('mobile-toc-open');
        }

        button.addEventListener('click', function () {
            drawer.classList.add('mobile-toc-open');
            mask.classList.add('mobile-toc-open');
        });
        mask.addEventListener('click', close);
        drawer.addEventListener('click', function (event) {
            if (event.target && event.target.tagName === 'A') {
                close();
            }
        });
    }

    function init() {
        var container = document.querySelector('.post-md');
        if (container) {
            create(container);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
