document.getElementById("deposit-button").addEventListener("click", function() {
	//button handle input section for deposit
	// const input = document.getElementById("deposit-Input");
	// const inputValue = input.value;
	// const inputValueConvertNumber = parseFloat(inputValue);'''''''''''''''''''''''''''''''''''''

    //second way function
const inputValueConvertNumber= getINputValue();

	//button handle for add text in out put
	const getValue = document.getElementById("deposit");
	const getValueText = getValue.innerText;
	const getValueTextConvert = parseFloat(getValueText);
	const totalDeposit = getValueTextConvert + inputValueConvertNumber;
	getValue.innerText = totalDeposit;
	//emty input
	// input.value = ""; ...................................................................
	// done deposit handle
	//balance add
	const balanceText = document.getElementById("balance-total");
	const balance = balanceText.innerText;
	const balanceConvert = parseFloat(balance);
	const balanceUpdate = balanceConvert + inputValueConvertNumber;
	balanceText.innerText = balanceUpdate;
});
//withdraw system
//button handle withdraw
document.getElementById("Withdraw-button").addEventListener("click", function() {
	//input from withdraw input
	const Input = document.getElementById("Withdraw-Input");
	const inputVALUE = Input.value;
	const inputVALUEConvert = parseFloat(inputVALUE);
	//balance minise when withdraw
	const balanceText = document.getElementById("balance-total");
	const balance = balanceText.innerText;
	const balanceConvert = parseFloat(balance);
	const balanceUpdate = balanceConvert - inputVALUEConvert;
	balanceText.innerText = balanceUpdate;
	//input clear
	Input.value = "";
	//add amount in withdraw box
	const withdrawText = document.getElementById("withdraw-amount");
	const balanceInWithdraw = withdrawText.innerText;
	const withdrawBalanceConvert = parseFloat(balanceInWithdraw);
	const withdrawBalanceUpdate = withdrawBalanceConvert + inputVALUEConvert;
	withdrawText.innerText = withdrawBalanceUpdate;
});


function getINputValue(){
    const input = document.getElementById("deposit-Input");
	const inputValue = input.value;
	const inputValueConvertNumber = parseFloat(inputValue);
//emty input
input.value = "";
return inputValueConvertNumber;
}