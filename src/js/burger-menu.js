(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");

    menuBtnRef.addEventListener("click", () => {
        const expanded =
            menuBtnRef.getAttribute("aria-expanded") === "true" || false;

        menuBtnRef.classList.toggle("active");
        menuBtnRef.setAttribute("aria-expanded", !expanded);

        document.body.classList.toggle("modal-open");
        mobileMenuRef.classList.toggle("active");
    });
})();