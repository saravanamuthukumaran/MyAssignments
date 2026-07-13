function browserName() {
    let browser = "Google Chrome"
    if (true) {
        console.log("bowser name is", browser);    
    } 
    else {
        console.log("browser name is", browser);        
    }    
}
browserName()

function runTests() {
    let testType = "smoke" 
    switch (testType) {
        case "smoke":
            console.log("Smoke Testing");
            break;
        case "sanity":
            console.log("Sanity Testing");
            break;
        case "regression":
            console.log("Regression Testing");
            break;
        default:
            console.log("Smoke Testing");
           break;
    }    
}
runTests()
console.log("Switch conditional statement printed successfully");