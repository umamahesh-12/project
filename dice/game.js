function rollDice() {
    const dice1 = document.getElementById("dice1");
    const dice2 = document.getElementById("dice2");
  
    dice1.classList.add("roll-animation");
    dice2.classList.add("roll-animation");
  
    setTimeout(() => {
      const roll1 = Math.floor(Math.random() * 6) + 1;
      const roll2 = Math.floor(Math.random() * 6) + 1;
  
      dice1.setAttribute("src", `Dice-${roll1}.png`);
      dice2.setAttribute("src", `Dice-${roll2}.png`);
  
      let resultText = "";
      let winner = "";
  
      if (roll1 > roll2) {
        resultText = "🏆Player 1 Wins!";
        winner = "Player 1";
      } else if (roll2 > roll1) {
        resultText = "🏆 Player 2 Wins!";
        winner = "Player 2";
      } else {
        resultText = "🤝 It's a Draw!";
        winner = "Draw";
      }
  
      document.getElementById("result").innerText = resultText;
  
      saveWinner(winner);
      showWinners();
  
      dice1.classList.remove("roll-animation");
      dice2.classList.remove("roll-animation");
    }, 600);
  }
  
  function saveWinner(winner) {
    const history = JSON.parse(localStorage.getItem("winners")) || [];
    history.push({
      winner: winner,
      time: new Date().toLocaleString()
    });
    localStorage.setItem("winners", JSON.stringify(history));
  }
  
  function showWinners() {
    const history = JSON.parse(localStorage.getItem("winners")) || [];
    const list = document.getElementById("winner-history");
    list.innerHTML = "";
  
    history.slice(-5).reverse().forEach(entry => {
      const li = document.createElement("li");
      li.textContent = `${entry.time} - ${entry.winner}`;
      list.appendChild(li);
    });
  }
  
  function resetWinners() {
    localStorage.removeItem("winners");
    showWinners();
  }
  
  // Modal
  function openAbout() {
    document.getElementById("aboutModal").style.display = "block";
  }
  
  function closeAbout() {
    document.getElementById("aboutModal").style.display = "none";
  }
  
  window.onload = showWinners;
  