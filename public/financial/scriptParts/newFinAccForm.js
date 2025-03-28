const newFinnAccformActions = {
    setupEventListeners() {
        const newFinAccShwFormBtn = document.getElementById("newFinAccShwFormBtn");
        const newFinnAccFormCloseBtn = document.getElementById("newFinnAccFormCloseBtn");
        const newFinAccForm = document.getElementById("newFinAccForm");

        newFinAccShwFormBtn.addEventListener("click", this.toggleForm);
        newFinnAccFormCloseBtn.addEventListener("click", this.toggleForm);
    },

    toggleForm() {
        const newFinAccForm = document.getElementById("newFinAccForm");
        const newFinAccShwFormBtn = document.getElementById("newFinAccShwFormBtn");

        if (newFinAccForm.classList.contains("hidden")) {
            newFinAccForm.classList.remove("hidden");
            newFinAccShwFormBtn.classList.add("hidden");
        } else {
            newFinAccShwFormBtn.classList.remove("hidden");
            newFinAccForm.classList.add("hidden");
        }
    }
};


export { newFinnAccformActions };