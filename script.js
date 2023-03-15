const squares = document.querySelectorAll(".square");
let currentPlayer = "zorro";

squares.forEach((square) => {
  square.addEventListener("click", handleClick);
});

function handleClick(event) {
  const square = event.target;
  const squareIndex = square.getAttribute("id");

  if (square.style.backgroundImage !== "") {
    return;
  }

  square.style.backgroundImage =
    currentPlayer === "zorro" ? "url(img/zorro.jpg)" : "url(img/sanji.jpg)";

  if (checkForWin()) {
    alert(`${currentPlayer} wins!`);
    resetBoard();
  } else if (checkForDraw()) {
    alert("It's a draw!");
    resetBoard();
  } else {
    currentPlayer = currentPlayer === "zorro" ? "sanji" : "zorro";
  }
}

// const updateCurrentStatus = () => {
//   if (unicornTurn) {
//     currentBeastStatusImg.src = "img/zorro.jpg";
//     currentBeastStatusImg.alt = "zorro";
//   } else {
//     currentBeastStatusImg.src = "img/sanji.jpg";
//     currentBeastStatusImg.alt = "sanji";
//   }
// };

function checkForWin() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  return winningCombinations.some((combination) => {
    return combination.every((index) => {
      return squares[index].style.backgroundImage.includes(currentPlayer);
    });
  });
}

function checkForDraw() {
  return [...squares].every((square) => {
    return square.style.backgroundImage !== "";
  });
}

function resetBoard() {
  squares.forEach((square) => {
    square.style.backgroundImage = "";
  });

  currentPlayer = "zorro";
}
