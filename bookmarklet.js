(function () {
    var bsp_a = (new Date()).getTime(),
        bsp_b = document.createElement("script");
    bsp_b.setAttribute("src", "bypassSvdPaywall.js?v=" + bsp_a), document.body.appendChild(bsp_b);
})();