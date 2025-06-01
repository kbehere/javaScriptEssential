const calculateTotalAmt = () => {
    let grocOne = parseFloat(document.getElementById('grocery_one').value);
    let grocTwo =  parseFloat(document.getElementById('grocery_two').value);
    let grocThree =  parseFloat(document.getElementById('grocery_three').value);
    console.log('gorsldkfj..', grocOne, grocTwo, grocThree)
    let total = grocOne + grocTwo + grocThree
    console.log(total);
    document.getElementById('result').innerText = `The total calculated amount is: ${total}`;
}