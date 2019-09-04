let keyUp = document.getElementById("message")
let left = document.getElementById("left")
let right = document.getElementById("right")

document.addEventListener('keyup', logKey);

function logKey(e) {
    left.textContent = e.target.value
    right.textContent = e.target.value
}




const audrey = document.getElementById("audrey")


/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
*/
window.addEventListener("scroll", function scroll() {
    /*
        Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. No lower than 50px, though.
    */
    this.window.scrollY(this.innerWidth > 50)


    /*
        Adjust the height of audrey to be 1/4 the value of
        `window.scrollY`. No lower than 100px, though.
    */

 this.window.scrollY(this.innerHeight > 100)
})
scroll(audrey)