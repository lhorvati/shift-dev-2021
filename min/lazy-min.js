document.addEventListener("DOMContentLoaded",function(){var e=[].slice.call(document.querySelectorAll("img.lazy"));if("IntersectionObserver"in window){var t=new IntersectionObserver(function(e,n){e.forEach(function(e){if(e.isIntersecting){var n=e.target;n.src=n.dataset.src,n.srcset=n.dataset.srcset,n.classList.remove("lazy"),t.unobserve(n)}})});e.forEach(function(e){t.observe(e)})}else{const n=function(){!1===active&&(active=!0,setTimeout(function(){e.forEach(function(t){t.getBoundingClientRect().top<=window.innerHeight&&t.getBoundingClientRect().bottom>=0&&"none"!==getComputedStyle(t).display&&(t.src=t.dataset.src,t.srcset=t.dataset.srcset,t.classList.remove("lazy"),e=e.filter(function(e){return e!==t}),0===e.length&&(document.removeEventListener("scroll",n),window.removeEventListener("resize",n),window.removeEventListener("orientationchange",n)))}),active=!1},200))};document.addEventListener("scroll",n),window.addEventListener("resize",n),window.addEventListener("orientationchange",n)}});