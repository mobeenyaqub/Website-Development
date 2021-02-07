window.onload = function () {

    const p1 = {
        score: 0,
        button: p1button = document.querySelector("#p1button"),
        display: p1Display = document.querySelector("#p1Display")
    }

    const p2 = {
        score: 0,
        button: p2button = document.querySelector("#p2button"),
        display: p2Display = document.querySelector("#p2Display")
    }

    const resetbutton = document.querySelector("#reset");
    const winningScoreSelect = document.querySelector("#playTo");
    let isGameOver = false;
    let winningScore = 3;

    function updateScores(player, opponent) {
        if (!isGameOver) {
            player.score += 1;

            if (player.score === winningScore) {

                isGameOver = true;
                player.display.classList.add("winner");
                opponent.display.classList.add("loser");
                player.button.disabled = true;
                opponent.button.disabled = true;
            }
            player.display.textContent = player.score;
        }
    }

    p1.button.addEventListener("click", function () {
        updateScores(p1, p2);
    })

    p2.button.addEventListener("click", function () {
        updateScores(p2, p1);
    })

    winningScoreSelect.addEventListener('change', function () {
        winningScore = parseInt(this.value);
        reset();
    })

    resetbutton.addEventListener('click', reset);

    function reset() {
        isGameOver = false;
        for (let p of [p1, p2]) {
            p.score = 0;
            p.display.textContent = 0;
            p.display.classList.remove("winner", "loser");
            p.button.disabled = false;
        }
    }

}

