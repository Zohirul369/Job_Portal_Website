const bar = document.getElementById("h-menu")
const menu = document.getElementById("menu")

if(bar){
    bar.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
}