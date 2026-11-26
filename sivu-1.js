//sivun 1 JavaScript tänne
const themeBtn = document.getElementById("theme")




themeBtn.addEventListener("click", function(){
    document.body.classList.toggle("light");
    document.body.classList.toggle("dark");
})