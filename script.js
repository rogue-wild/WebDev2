const currentYear = new Date().getFullYear();
const footerTextElement = document.getElementsByClassName("footer-text")[0];
footerTextElement.innerHTML = `${currentYear}`;
