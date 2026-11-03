document.addEventListener("DOMContentLoaded", function () {

  // MOBILE NAVIGATION
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.querySelector(".main-nav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function () {
      const isOpen = mainNav.classList.toggle("active");

      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
      );
      menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    mainNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mainNav.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
        menuToggle.textContent = "☰";
      });
    });
  }

  // ENGLISH / HINDI LANGUAGE TOGGLE
  const languageToggle = document.getElementById("languageToggle");

  if (languageToggle) {
    let currentLanguage =
      localStorage.getItem("erat-language") || "en";

    function updateLanguage(language) {
      currentLanguage = language;
      document.documentElement.lang = language;

      document.querySelectorAll("[data-en][data-hi]").forEach(function (element) {
        element.textContent =
          language === "hi"
            ? element.getAttribute("data-hi")
            : element.getAttribute("data-en");
      });

      languageToggle.textContent =
        language === "en" ? "हिंदी" : "English";

      localStorage.setItem("erat-language", language);
    }

    languageToggle.addEventListener("click", function () {
      updateLanguage(currentLanguage === "en" ? "hi" : "en");
    });

    updateLanguage(currentLanguage);
  }

  // CURRENT YEAR
  document.querySelectorAll("[data-current-year]").forEach(function (element) {
    element.textContent = new Date().getFullYear();
  });

});
