
let expression = ""; 

function displayContent(content) {
    expression += content;
    document.getElementById("inp").value = expression; 
}

function caclClare() {
    expression = ""; 
    document.getElementById("inp").value = ""; 
}

function calculate() {
    try {
        
        const result = eval(expression); 
        document.getElementById("inp").value = result; 
        expression = result.toString(); 
    } catch (error) {
        document.getElementById("inp").value = "Error";
        expression = ""; 
    }
}
