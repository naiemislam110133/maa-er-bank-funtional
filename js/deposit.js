document.getElementById("btn-deposit").addEventListener('click', function(){

 /* 
    1. get the element by id
    2. get the value from the element
    3. convert string value to a number

    duitar kaj jodi same hoi thahole function use korte hobe 
    and akoy kaj jodi bar bar korte hoi tahole loop use korte hobe  
*/
const newDepositAmount = getInputFieldValueById("deposit-field");


// get previous text element value by id 

const previousDepositTotal = getTextElementValueById("deposit-total");
 
// calculate new deposit total 
const newDepositTotal = previousDepositTotal + newDepositAmount;
console.log(newDepositTotal);

// set deposit Total Value 
setTextElementValueById("deposit-total", newDepositTotal);

// get the previous balance using by function 
const previousBalanceTotal = getTextElementValueById("balance-total");
const newBalanceTotal = previousBalanceTotal + newDepositAmount;
setTextElementValueById("balance-total", newBalanceTotal); 

});


// Finish Deposit part 