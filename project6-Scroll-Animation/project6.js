const boxes = document.querySelectorAll(".box")

// window.addEventListener("scroll", ()=> {
//     boxes.forEach(box) => {
//         box.classList.add("show")
//     }
// })

window.addEventListener("scroll", checkBoxes)

function checkBoxes() {
    const triggerBottomm = window.innerHeight / 5 * 4;


    boxes.forEach(box => {
        console.log("triggerbottom", triggerBottomm)
        console.log("window height", window.innerHeight);
        const boxTop = box.getBoundingClientRect().top
        console.log(boxTop)

        if(boxTop < triggerBottomm) {
                box.classList.add("show")
        } else {
            box.classList.remove("show")
        }
            })
}

checkBoxes()