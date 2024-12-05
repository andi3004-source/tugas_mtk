const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const gate = document.getElementById("gate");
const resultDisplay = document.getElementById("result");
const canvas = document.getElementById("circuitCanvas");
const ctx = canvas.getContext("2d");

document.getElementById("calculate-btn").addEventListener("click", () => {
  const value1 = parseInt(input1.value);
  const value2 = parseInt(input2.value);
  const selectedGate = gate.value;

  let result;

  switch (selectedGate) {
    case "AND":
      result = value1 && value2;
      break;
    case "OR":
      result = value1 || value2;
      break;
    case "XOR":
      result = value1 ^ value2;
      break;
    case "NAND":
      result = !(value1 && value2);
      break;
    case "NOR":
      result = !(value1 || value2);
      break;
    case "NOT Input 1":
      result = !value1;
      break;
    case "NOT Input 2":
      result = !value2;
      break;
    default:
      result = "Error";
  }

  resultDisplay.textContent = Number(result);

  drawCircuit(value1, value2, selectedGate, Number(result));
});

function drawCircuit(value1, value2, gate, output) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Input 1
  ctx.fillStyle = value1 ? "green" : "red";
  ctx.beginPath();
  ctx.arc(50, 100, 10, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "black";
  ctx.fillText("Input 1", 20, 100);

  if (!gate.includes("NOT")) {
    // Input 2
    ctx.fillStyle = value2 ? "green" : "red";
    ctx.beginPath();
    ctx.arc(50, 200, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "black";
    ctx.fillText("Input 2", 20, 200);
  }

  // Output
  ctx.fillStyle = output ? "green" : "red";
  ctx.beginPath();
  ctx.arc(350, 150, 10, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "black";
  ctx.fillText("Output", 370, 150);

  // Add logic gate drawing as needed based on gate
  ctx.fillStyle = "lightblue";
  ctx.fillRect(150, 100, 100, 100);
  ctx.fillStyle = "black";
  ctx.fillText(gate, 175, 150);
}
