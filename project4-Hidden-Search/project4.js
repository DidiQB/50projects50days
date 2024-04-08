const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", ()=> {
    console.log("button clicked")
    // if(search.classList.contains("active")) {
    //     search.classList.remove("active");
    // } else {
    //     search.classList.add("active");
    // }

    // Easier way of doing it:
    search.classList.toggle("active");
    input.focus();
})