const body=document.querySelector("body");
const checkBox = document.querySelector(".theme-switch__toggle");


checkBox.addEventListener('change', themeHandler);

function themeHandler(event) {
    if (checkBox.checked) {
         body.classList.remove('light-theme');
         body.classList.add('dark-theme');
         localStorage.setItem('theme', 'dark-theme'); 
    } else if (!checkBox.checked) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme')
        localStorage.setItem('theme', 'light-theme'); 
    }
};
    
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.add(currentTheme);
};
if (currentTheme === "dark-theme") {
    checkBox.checked=true;
}
