/*
 * ObservAI Motor de Operações — comportamentos compartilhados da demo.
 * Carregado pelos quatro dashboards. Nenhum backend é necessário.
 */
(function () {
  "use strict";

  var toastTimer = null;

  function makeAnnouncable(host) {
    host.setAttribute("role", "status");
    host.setAttribute("aria-live", "polite");
    host.setAttribute("aria-atomic", "true");
  }

  // O toast em governance.html já existe; vamos torná-lo acessível a leitores de tela também.
  var initialHost = document.getElementById("toast-banner");
  if (initialHost) makeAnnouncable(initialHost);

  function showNotice(title, message) {
    // A Visão Executiva já traz um toast estilizado + showToast().
    if (typeof window.showToast === "function") {
      window.showToast(title, message, "info");
      return;
    }

    var host = document.getElementById("toast-banner");
    if (!host) {
      host = document.createElement("div");
      host.id = "toast-banner";
      document.body.appendChild(host);
    }
    makeAnnouncable(host);

    host.style.cssText =
      "position:fixed;bottom:24px;right:24px;z-index:9999;max-width:340px;" +
      "padding:14px 18px;border-radius:12px;background:#213145;color:#eaf1ff;" +
      "box-shadow:0 12px 32px rgba(0,0,0,.22);transition:opacity .25s,transform .25s;" +
      "font-family:Inter,system-ui,sans-serif;opacity:0;transform:translateY(24px);";

    if (!host.firstChild) {
      host.innerHTML =
        '<div style="display:flex;align-items:flex-start;gap:12px;">' +
        '<span class="material-symbols-outlined" style="font-size:20px;color:#4edea3;">info</span>' +
        "<div>" +
        '<div data-toast-title style="font-size:13px;font-weight:600;"></div>' +
        '<div data-toast-message style="font-size:12px;opacity:.8;margin-top:2px;"></div>' +
        "</div></div>";
    }
    host.querySelector("[data-toast-title]").textContent = title;
    host.querySelector("[data-toast-message]").textContent = message;

    // Força um reflow para a transição rodar na primeira pintura.
    void host.offsetWidth;
    host.style.opacity = "1";
    host.style.transform = "translateY(0)";

    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      host.style.opacity = "0";
      host.style.transform = "translateY(24px)";
    }, 3800);
  }

  document.addEventListener("click", function (event) {
    var target = event.target.closest("[data-demo]");
    if (!target) return;
    event.preventDefault();
    var label = target.getAttribute("data-demo") || "Esta ação";
    showNotice("Demo · " + label, "Ação ilustrativa: este protótipo não possui backend integrado.");
  });

  document.addEventListener("keydown", function (event) {
    var isShortcut = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";
    if (!isShortcut) return;
    event.preventDefault();
    var search = document.getElementById("global-search");
    if (search) search.focus();
  });
})();
