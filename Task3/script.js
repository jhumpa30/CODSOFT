let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");
let expression = "";

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        let value = this.innerText;

        if (value === "C") {
            expression = "";
            display.value = "";
        }
        else if (value === "=") {
            if (expression !== "") {
                display.value = eval(expression);
                expression = display.value;
            }
        }
        else {
            expression += value;
            display.value = expression;
        }
    });
}
 