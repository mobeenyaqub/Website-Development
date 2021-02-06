window.onload = function () {

    const button = document.querySelector("#button");
    const body = document.querySelector("body");

    button.addEventListener("click", () => {

        let r = Math.random() * 255;
        let g = Math.random() * 255;
        let b = Math.random() * 255;

        body.style.backgroundColor = `rgb(${r},${g},${b})`;
        
    })

}
