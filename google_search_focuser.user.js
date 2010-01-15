// ==UserScript==
// @name           Google Search Focuser
// @namespace      http://www.openjs.com
// @description    Pressing Alt+s in a google result page will bring the focus to search text input field
// @include        http://google.co*/*q=*
// @include        http://www.google.co*/*q=*
// ==/UserScript==

//original author Binny V A
(function() {
        var search = document.getElementsByName("q")[0];
        document.addEventListener('keydown', function(e) {
                if (e.keyCode) code = e.keyCode;
                else if (e.which) code = e.which;
                if(e.altKey && code == 83) { //83 = s
                        search.focus();
                        search.select();
                        e.stopPropagation();
                e.preventDefault();
                }
        }, false);
})();
