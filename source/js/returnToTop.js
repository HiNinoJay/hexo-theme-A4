

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

	document.addEventListener('click', function(event) {
		var lgOn = document.querySelector('.lg-on');
		if (lgOn) {
			// 如果页面中存在具有类名 .lg 的元素
		} else {
			// 如果页面中不存在具有类名 .lg 的元素
			// 恢复滚动
			$('body').css('overflow', 'auto');
			jQuery('.return-to-last-progress-wrap').addClass('active-progress');
		}
	});

	$(document).on('click', '.gallery-item', function (e) {
		window.scrollTo(0, 0);
		// 禁止滚动
		$('body').css('overflow', 'hidden');
		jQuery('.return-to-last-progress-wrap').removeClass('active-progress');
	});

	$(document).on('click', '.lg-close', function (e) {

		// 恢复滚动
		$('body').css('overflow', 'auto');
		jQuery('.return-to-last-progress-wrap').addClass('active-progress');
	});
	







	
})(jQuery); 