const currentYearTag = document.querySelector("#currentYear");
const currentYear = new Date().getFullYear();
const firstYearTag = document.querySelector("#firstYear");
if (!firstYearTag.innerHTML.includes(currentYear)) {
    currentYearTag.innerHTML = currentYear + " - ";
}
