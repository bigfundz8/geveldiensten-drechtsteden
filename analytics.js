(function () {
  var cfg = window.GDD_ANALYTICS || {};
  var ga4 = (cfg.ga4 || "").trim();
  var cf = (cfg.cloudflare || "").trim();

  if (ga4) {
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(ga4);
    document.head.appendChild(s);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", ga4, { anonymize_ip: true });
  }

  if (cf) {
    var beacon = document.createElement("script");
    beacon.defer = true;
    beacon.src = "https://static.cloudflareinsights.com/beacon.min.js";
    beacon.setAttribute("data-cf-beacon", JSON.stringify({ token: cf }));
    document.body ? document.body.appendChild(beacon) : document.head.appendChild(beacon);
  }
})();
