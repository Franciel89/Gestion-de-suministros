let arrow = document.querySelectorAll(".arrow");
console.log(arrow)

for (let i = 0; i < arrow.length; i++){
    arrow[i].addEventListener("click", (e)=>{
        let arrowParent = e.target.parentElement.parentElement;
        arrowParent.classList.toggle("showMenu");
    })
}

let slidebar = document.querySelector(".menu-slide");
let slidebarBtn = document.querySelector(".ri-menu-line");
console.log(slidebarBtn);
slidebarBtn.addEventListener("click",(e)=>{
    slidebar.classList.toggle("close");
})