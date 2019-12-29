let runningTotal = 0;
let buffer = "0";
let previousOperator = null;
const screen = document.querySelector(".screen");

function buttonClick(value) {
    if (isNaN(parseInt(value))) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
}


// bind up evenet listener
document.querySelector('.calc-buttons').addEventListener("click", function(event) {
    buttonClick(event.target.innerText);
})

function handleNumber(value) {
    if (buffer === "0") {
        buffer = value;
    } else {
        buffer += value;
    }
    rerender();
}

function handleSymbol(value) {
    console.log(value);
    switch(value) {
        case 'C':
            console.log("case C!");
            buffer = "0";
            runningTotal = 0;
            break;
        case "=":
            if (previousOperator === null) {
                return;
            }
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = "" + runningTotal;
            runningTotal = 0;
            break;
        case "←":
            if (buffer.length === 1) {
                buffer = "0";
            } else {
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;
        default:
            handleMath(value);
            break;
    }
}

function rerender() {
    screen.innerText = buffer;
}

function handleSymbol(value) {
    console.log("FUNCTION: handleSymbol: ", value);
}