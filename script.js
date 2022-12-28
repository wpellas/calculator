let display = document.getElementById("display"); // Gives us access to the display div

// Converts HTMLCollection into an array.
let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map(button => {
    button.addEventListener('click', (eVent) => {
        switch(eVent.target.innerText){ // Looks for the text within the current target, so the text inside the html element of the button
            case 'C': // If C is pressed
                display.innerText = ''; // Turns Display into an empty string (clears it)
                break;
            case '←': // if backarrow is pressed
                if(display.innerText){ // Checks if something exists within the display string
                    display.innerText = display.innerText.slice(0, -1); // Removes the latest item in the string
                }
                break;
            case '=': // if equals is pressed
                try {
                    display.innerText = eval(display.innerText); // Calculates everything inputted in the string in mathematical order
                } catch {
                    display.innerText = "Error!"; // Returns an errortext if the inputs are wrong
                }
                break;
            // case ".": // If you don't want more than one dot, but we do need the ability to use more than one.
            //     if(display.innerText = ".")
            //     break;
            default:
                display.innerText += eVent.target.innerText; // Adds the target button text content as a string to the display
        }
    });
});