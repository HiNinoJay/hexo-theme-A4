

/* Please ❤ this if you like it! */



(function($) { "use strict";

	$(document).ready(function(){"use strict";
	
		//Scroll back to top
		
		var progressPath = document.querySelector('.progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		// progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 0ms linear';		
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);	
		var offset = 50;
		var duration = 250;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				// 执行你想要的操作，比如加载更多内容
				jQuery('.return-to-last-progress-wrap').css('bottom', '100px');
				jQuery('.progress-wrap').addClass('active-progress');
			} else {
				jQuery('.return-to-last-progress-wrap').css('bottom', '45px');
				jQuery('.progress-wrap').removeClass('active-progress');
			}
		});				
		jQuery('.progress-wrap').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})
		
		
	});

	$(document).ready(function() {
		// 选择你想要观察的元素
		var targetNode = document.querySelector('.lg-container');
		if(targetNode == undefined || targetNode == null) return;
	
		// 观察配置，观察属性变化
		var config = { attributes: true, attributeFilter: ['class'] };
	
		// 当检测到属性变化时的回调函数
		var callback = function(mutationsList, observer) {
			mutationsList.forEach(function(mutation) {
				if (mutation.attributeName === 'class') {
					// 获取当前的 class
					var currentClass = mutation.target.className;
					
					// 检查 lg-show 类是否存在
					if ($(mutation.target).hasClass('lg-show')) {
						$('.return-to-last-progress-wrap').hide();
						$('.progress-wrap').hide();
					}

					// 检查 lg-show 类是否存在
					if (!$(mutation.target).hasClass('lg-show')) {
						$('.return-to-last-progress-wrap').show();
						$('.progress-wrap').show();
					}
					
					
				}
			});
		};
	
		// 创建一个观察者实例并传入回调函数
		var observer = new MutationObserver(callback);
	
		// 开始观察目标节点
		observer.observe(targetNode, config);
	});
	
	
})(jQuery); 