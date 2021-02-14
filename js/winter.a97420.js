(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
var wl;

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=480){cw++;}if(w>=768){cw++;}if(w>=960){cw++;}if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}
!function(){if("Promise"in window){var e,t,r=document,n=function(){return r.createElement("link")},o=new Set,a=n(),i=a.relList&&a.relList.supports&&a.relList.supports("prefetch"),s=location.href.replace(/#[^#]+$/,"");o.add(s);var c=function(e){var t=location,r="http:",n="https:";if(e&&e.href&&e.origin==t.origin&&[r,n].includes(e.protocol)&&(e.protocol!=r||t.protocol!=n)){var o=e.pathname;if(!(e.hash&&o+e.search==t.pathname+t.search||".html"!=o.substr(-5)&&".html"!=o.substr(-5)&&"/"!=o.substr(-1)))return!0}},u=function(e){var t=e.replace(/#[^#]+$/,"");if(!o.has(t)){if(i){var a=n();a.rel="prefetch",a.href=t,r.head.appendChild(a)}else{var s=new XMLHttpRequest;s.open("GET",t,s.withCredentials=!0),s.send()}o.add(t)}},f=function(e){return e.target.closest("a")},p=function(t){var r=t.relatedTarget;r&&f(t)==r.closest("a")||e&&(clearTimeout(e),e=void 0)},l={capture:!0,passive:!0};r.addEventListener("touchstart",function(e){t=performance.now();var r=f(e);c(r)&&u(r.href)},l),r.addEventListener("mouseover",function(r){if(!(performance.now()-t<1200)){var n=f(r);c(n)&&(n.addEventListener("mouseout",p,{passive:!0}),e=setTimeout(function(){u(n.href),e=void 0},80))}},l)}}();

$(function(){
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){var a='data-src';var e=document.querySelector('.js22 .slide0');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/none-2400-12.jpg':'images/none-1200-12.jpg');
var a='data-src';var e=document.querySelector('.js22 .slide1');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/none-2400-13.jpg':'images/none-1200-13.jpg');
var a='data-src';var e=document.querySelector('.js22 .slide2');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/none-2400-14.jpg':'images/none-1200-14.jpg');
var a='data-src';var e=document.querySelector('.js22 .slide3');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/none-2400-15.jpg':'images/none-1200-15.jpg');
var a='data-src';var e=document.querySelector('.js22 .slide4');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/none-2400-16.jpg':'images/none-1200-16.jpg');}else if($(window).width()>=960){var a='data-src';var e=document.querySelector('.js22 .slide0');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/none-1920-12.jpg':'images/none-960-19.jpg');
var a='data-src';var e=document.querySelector('.js22 .slide1');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/none-1920-13.jpg':'images/none-960-21.jpg');
var a='data-src';var e=document.querySelector('.js22 .slide2');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/none-1920-14.jpg':'images/none-960-23.jpg');
var a='data-src';var e=document.querySelector('.js22 .slide3');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/none-1920-15.jpg':'images/none-960-25.jpg');
var a='data-src';var e=document.querySelector('.js22 .slide4');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/none-1920-16.jpg':'images/none-960-27.jpg');}else if($(window).width()>=768){var a='data-src';var e=document.querySelector('.js22 .slide0');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/none-1536-12.jpg':'images/none-768-12.jpg');
var a='data-src';var e=document.querySelector('.js22 .slide1');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/none-1536-13.jpg':'images/none-768-13.jpg');
var a='data-src';var e=document.querySelector('.js22 .slide2');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/none-1536-14.jpg':'images/none-768-14.jpg');
var a='data-src';var e=document.querySelector('.js22 .slide3');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/none-1536-15.jpg':'images/none-768-15.jpg');
var a='data-src';var e=document.querySelector('.js22 .slide4');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/none-1536-16.jpg':'images/none-768-16.jpg');}else if($(window).width()>=480){var a='data-src';var e=document.querySelector('.js22 .slide0');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/none-960-18.jpg':'images/none-480-6.jpg');
var a='data-src';var e=document.querySelector('.js22 .slide1');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/none-960-20.jpg':'images/none-480-7.jpg');
var a='data-src';var e=document.querySelector('.js22 .slide2');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/none-960-22.jpg':'images/none-480-8.jpg');
var a='data-src';var e=document.querySelector('.js22 .slide3');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/none-960-24.jpg':'images/none-480-9.jpg');
var a='data-src';var e=document.querySelector('.js22 .slide4');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/none-960-26.jpg':'images/none-480-10.jpg');}else{var a='data-src';var e=document.querySelector('.js22 .slide0');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/none-640-6.jpg':'images/none-320-6.jpg');
var a='data-src';var e=document.querySelector('.js22 .slide1');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/none-640-7.jpg':'images/none-320-7.jpg');
var a='data-src';var e=document.querySelector('.js22 .slide2');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/none-640-8.jpg':'images/none-320-8.jpg');
var a='data-src';var e=document.querySelector('.js22 .slide3');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/none-640-9.jpg':'images/none-320-9.jpg');
var a='data-src';var e=document.querySelector('.js22 .slide4');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/none-640-10.jpg':'images/none-320-10.jpg');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(i,e){$(e).click(function(){var t=e.hash.length>1?$('[name="'+e.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.js22 .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,overflow: 'hidden',fade: true,slide: 'div',cssEase: 'linear',speed: 300,dots: false,arrows: false,infinite: true,autoplay: true,pauseOnHover: false,autoplaySpeed: 2500});wl=new woolite();
wl.init();
wl.addAnimation($('.js21')[0], "3.60s", "0.00s", 1, 100);
wl.start();

});