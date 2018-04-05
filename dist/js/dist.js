"use strict";function isMicrosoftBrowser(o){return new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(o)}function polyfill(){function o(o,e){this.scrollLeft=o,this.scrollTop=e}function e(o){if(null===o||"object"!==(void 0===o?"undefined":_typeof(o))||void 0===o.behavior||"auto"===o.behavior||"instant"===o.behavior)return!0;if("object"===(void 0===o?"undefined":_typeof(o))&&"smooth"===o.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+o.behavior+" is not a valid value for enumeration ScrollBehavior.")}function t(o,e){return"Y"===e?o.clientHeight+f<o.scrollHeight:"X"===e?o.clientWidth+f<o.scrollWidth:void 0}function l(o,e){var t=w.getComputedStyle(o,null)["overflow"+e];return"auto"===t||"scroll"===t}function r(o){var e=t(o,"Y")&&l(o,"Y"),r=t(o,"X")&&l(o,"X");return e||r}function n(o){var e,t,l,r=(u()-o.startTime)/s;e=function(o){return.5*(1-Math.cos(Math.PI*o))}(r=r>1?1:r),t=o.startX+(o.x-o.startX)*e,l=o.startY+(o.y-o.startY)*e,o.method.call(o.scrollable,t,l),t===o.x&&l===o.y||w.requestAnimationFrame(n.bind(w,o))}function i(e,t,l){var r,i,c,s,f=u();e===d.body?(r=w,i=w.scrollX||w.pageXOffset,c=w.scrollY||w.pageYOffset,s=a.scroll):(r=e,i=e.scrollLeft,c=e.scrollTop,s=o),n({scrollable:r,method:s,startTime:f,startX:i,startY:c,x:t,y:l})}if(!("scrollBehavior"in d.documentElement.style&&!0!==w.__forceSmoothScrollPolyfill__)){var c=w.HTMLElement||w.Element,s=468,f=isMicrosoftBrowser(w.navigator.userAgent)?1:0,a={scroll:w.scroll||w.scrollTo,scrollBy:w.scrollBy,elementScroll:c.prototype.scroll||o,scrollIntoView:c.prototype.scrollIntoView},u=w.performance&&w.performance.now?w.performance.now.bind(w.performance):Date.now;w.scroll=w.scrollTo=function(){void 0!==arguments[0]&&(!0!==e(arguments[0])?i.call(w,d.body,void 0!==arguments[0].left?~~arguments[0].left:w.scrollX||w.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:w.scrollY||w.pageYOffset):a.scroll.call(w,void 0!==arguments[0].left?arguments[0].left:"object"!==_typeof(arguments[0])?arguments[0]:w.scrollX||w.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:w.scrollY||w.pageYOffset))},w.scrollBy=function(){void 0!==arguments[0]&&(e(arguments[0])?a.scrollBy.call(w,void 0!==arguments[0].left?arguments[0].left:"object"!==_typeof(arguments[0])?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):i.call(w,d.body,~~arguments[0].left+(w.scrollX||w.pageXOffset),~~arguments[0].top+(w.scrollY||w.pageYOffset)))},c.prototype.scroll=c.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==e(arguments[0])){var o=arguments[0].left,t=arguments[0].top;i.call(this,this,void 0===o?this.scrollLeft:~~o,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value couldn't be converted");a.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!==_typeof(arguments[0])?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},c.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==e(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):a.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},c.prototype.scrollIntoView=function(){if(!0!==e(arguments[0])){var o=function(o){var e;do{e=(o=o.parentNode)===d.body}while(!1===e&&!1===r(o));return e=null,o}(this),t=o.getBoundingClientRect(),l=this.getBoundingClientRect();o!==d.body?(i.call(this,o,o.scrollLeft+l.left-t.left,o.scrollTop+l.top-t.top),"fixed"!==w.getComputedStyle(o).position&&w.scrollBy({left:t.left,top:t.top,behavior:"smooth"})):w.scrollBy({left:l.left,top:l.top,behavior:"smooth"})}else a.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},w=window,d=document,fixHeader=function(){document.querySelector(".header-bg").classList.add("header-bg--fixed")},unfixHeader=function(){if(!document.querySelector(".menu").classList.contains("menu--active")){document.querySelector(".header-bg").classList.remove("header-bg--fixed")}},setFixHeaderOnScrollListener=function(){var o=0;window.addEventListener("scroll",function(){var e=window.pageYOffset;e<o&&e>250?fixHeader():unfixHeader(),o=e})};window.onload=function(){polyfill(),setMenuLinksListener(),setToggleMenuListener(),setFixHeaderOnScrollListener()};var changeToggleButtonIcon=function(){var o=document.querySelector("#toggle-menu > i");o.classList.contains("fa-bars")?(o.classList.remove("fa-bars"),o.classList.add("fa-times")):(o.classList.remove("fa-times"),o.classList.add("fa-bars"))},toggleMenu=function(){document.querySelector(".menu").classList.toggle("menu--active"),changeToggleButtonIcon()},closeMenu=function(){document.querySelector(".menu").classList.remove("menu--active"),changeToggleButtonIcon()},setToggleMenuListener=function(){document.querySelector("#toggle-menu").addEventListener("click",function(o){o.preventDefault(),toggleMenu()})},smoothScrollTo=function(o){var e=document.querySelector(o).getBoundingClientRect();window.scrollBy({top:e.top,left:0,behavior:"smooth"})},setMenuLinksListener=function(o){document.querySelectorAll(".menu__link").forEach(function(o){o.addEventListener("click",function(e){e.preventDefault();var t=o.getAttribute("href");smoothScrollTo(t),closeMenu()})})};