/* --------------- Grab elements from DOM --------------- */
const links = document.querySelectorAll(".nav-link");

const toggle_btn = document.querySelector(".toggle-btn");

const hamburger = document.querySelector(".hamburger")

/* --------------- Sticky Navbar --------------- */
let header = document.querySelector("header");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  activeLink();
  if(document.documentElement.scrollTop > 20){
    header.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    header.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

/* --------------- Change Active Link On Scroll --------------- */
function activeLink(){
   let sections = document.querySelectorAll("section[id]");
   let passedSections = Array.from(sections)
        .map((sct, i) => {
        return {
            y: sct.getBoundingClientRect().top - header.offsetHeight,
            id: i, 
        };
    })
    .filter(sct => sct.y <= 0);

   let currSectionID = passedSections.at(-1).id;

   links.forEach((l) => l.classList.remove("active"));
   links[currSectionID].classList.add("active");
}

activeLink();
/* --------------- Change Page Theme --------------- */
function changeTheme(){
    if(!document.body.classList.contains("dark")){
        document.body.classList.add("dark");
        toggle_btn.classList.replace("uil-moon","uil-sun");
    }
    else{
        document.body.classList.remove("dark");
        toggle_btn.classList.replace("uil-sun","uil-moon");
    }
}

toggle_btn.addEventListener("click", () => {
    changeTheme();
});

/* --------------- Open & Close Navbar Menu --------------- */
hamburger.addEventListener("click", () => {
  document.body.classList.toggle("open");
  document.body.classList.toggle("StopScrolling");
});

links.forEach(link => link.addEventListener("click", () =>{
  document.body.classList.remove("open");
  document.body.classList.remove("StopScrolling");
}));
