window.onload = function () {

    const button1 = document.querySelector("#button1");
    const button2 = document.querySelector("#button2");
    const player1 = document.querySelector("#player1");
    const player2 = document.querySelector("#player2");
    const reset = document.querySelector("#reset");
    let score1 = 1;
    let score2 = 1;
    let win = false;

    button1.addEventListener("click", () => {
        if (!win) {
            player1.textContent = score1;
        }

        if (score1 == 11) {
            player1.style.color = "#774936";
            win = true;
            button2.disabled = true;
        }
        score1++;
    })

    button2.addEventListener("click", () => {
        if (!win) {
            player2.textContent = score2;
        }

        if (score2 == 11) {
            player2.style.color = "#774936";
            win = true;
            button1.disabled = true;
        }
        score2++;
    })

    reset.addEventListener("click", () => {
        win = false;
        score1 = 0;
        score2 = 0;
        player1.textContent = score1;
        player2.textContent = score2;
        player1.style.color = "#adb5bd";
        player2.style.color = "#adb5bd";
        button2.disabled = false;
        button1.disabled = false;
    })

}