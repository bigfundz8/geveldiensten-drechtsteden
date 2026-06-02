(function () {
  var toggle = document.querySelector(".nav-toggle");
  var panel = document.getElementById("mobile-nav");
  if (!toggle || !panel) return;

  function setOpen(open) {
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Sluit menu" : "Open menu");
    if (open) {
      panel.hidden = false;
      panel.classList.add("is-open");
    } else {
      panel.classList.remove("is-open");
      panel.hidden = true;
    }
    document.body.classList.toggle("nav-open", open);
  }

  toggle.addEventListener("click", function () {
    setOpen(!panel.classList.contains("is-open"));
  });

  panel.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setOpen(false);
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setOpen(false);
  });
})();

(function () {
  var bar = document.getElementById("project-filter");
  if (!bar) return;

  var chips = bar.querySelectorAll("button[data-filter]");
  var cards = document.querySelectorAll(".project-card[data-project-cats]");
  if (!chips.length || !cards.length) return;

  function applyFilter(key) {
    chips.forEach(function (c) {
      c.classList.toggle("is-active", c.getAttribute("data-filter") === key);
      c.setAttribute("aria-pressed", c.getAttribute("data-filter") === key ? "true" : "false");
    });
    cards.forEach(function (card) {
      var cats = (card.getAttribute("data-project-cats") || "")
        .trim()
        .split(/\s+/)
        .filter(Boolean);
      var show = key === "all" || cats.indexOf(key) >= 0;
      card.classList.toggle("is-filtered-out", !show);
    });
  }

  chips.forEach(function (chip) {
    chip.setAttribute("aria-pressed", chip.classList.contains("is-active") ? "true" : "false");
    chip.addEventListener("click", function () {
      applyFilter(chip.getAttribute("data-filter") || "all");
    });
  });
})();

(function () {
  if (document.querySelector(".sticky-contact")) return;

  var holder = document.createElement("div");
  holder.className = "sticky-contact";
  holder.setAttribute("aria-label", "Snel contact");
  holder.innerHTML =
    '<a class="sticky-contact__whatsapp" href="https://wa.me/31621387800" target="_blank" rel="noopener noreferrer">WhatsApp</a>' +
    '<a class="sticky-contact__phone" href="tel:+31621387800">Bel 06 2138 7800</a>';

  document.body.appendChild(holder);
})();
