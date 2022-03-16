const scrollIndictor = document.querySelector(".scroll-indicator");
const html = document.querySelector("html");

window.addEventListener("scroll",()=>{
     let winTop = window.scrollY;
     let scrollHeight = html.scrollHeight;
     let clientHeight = html.clientHeight;

     let scrolled = (winTop/(scrollHeight - clientHeight))* 100 

     scrollIndictor.style.width = `${scrolled}%`;
})