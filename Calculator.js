// RANDOMURI
let result = document.getElementById('result-text');
let instantResult = document.getElementById('instant-result-text');
let instantResult_Div = document.getElementById('instant-result-div');
let cal_grid = document.getElementById('cal-grid');
let result_Div = document.getElementById('result-div');

let Nsemne = 0;

let swapped = false;
let calcNumbs = [];
let calcSemns = [];

// BUTOANE

const clear_btn = document.getElementById('clear-button');
const remove_btn = document.getElementById('remove-button');
const percent_btn = document.getElementById('percent-button');
const divide_btn = document.getElementById('divide-button');
const btn7 = document.getElementById('7-button');
const btn8 = document.getElementById('8-button');
const btn9 = document.getElementById('9-button');
const multiply_btn = document.getElementById('multiply-button');
const btn4 = document.getElementById('4-button');
const btn5 = document.getElementById('5-button');
const btn6 = document.getElementById('6-button');
const substract_btn = document.getElementById('substract-button');
const btn1 = document.getElementById('1-button');
const btn2 = document.getElementById('2-button');
const btn3 = document.getElementById('3-button');
const add_btn = document.getElementById('add-button');
const swap_btn = document.getElementById('swap-button');
const btn0 = document.getElementById('0-button');
const virgula_btn = document.getElementById('virgula-button');
const equals_btn = document.getElementById('equals-button');
const radical_btn = document.getElementById('radical-button')
const leftBar_btn = document.getElementById('left-bar-button');
const rightBar_btn = document.getElementById('right-bar-button');
const power_btn = document.getElementById('power-button');

//SPECIAL BUTTONS

clear_btn.addEventListener('click', () => {
  clear();
})

remove_btn.addEventListener('click', () => {

  remove();
  
})

percent_btn.addEventListener('click', () => {
	add_percent();
})

swap_btn.addEventListener('click', () => {

	swap();

})

equals_btn.addEventListener('click', () => {
  calculate();
})

// ADD BUTTONS

btn0.addEventListener('click', () => {
  add_0();
})
btn1.addEventListener('click', () => {
  add_1();
})
btn2.addEventListener('click', () => {
  add_2();
})
btn3.addEventListener('click', () => {
  add_3();
})
btn4.addEventListener('click', () => {
  add_4();
})
btn5.addEventListener('click', () => {
  add_5();
})
btn6.addEventListener('click', () => {
  add_6();
})
btn7.addEventListener('click', () => {
  add_7();
})
btn8.addEventListener('click', () => {
  add_8();
})
btn9.addEventListener('click', () => {
  add_9();
})

// ADD BUTTONS SEMNE

virgula_btn.addEventListener('click', () => {
  add_virgula();
})

add_btn.addEventListener('click', () => {
  add_plus();
})
substract_btn.addEventListener('click', () => {
  add_substract();
})
multiply_btn.addEventListener('click', () => {
  add_multiply();
})
divide_btn.addEventListener('click', () => {
  add_divide();
})

// EXTRA EVENTS

leftBar_btn.addEventListener('click', () => {
  add_left_bar();
})
rightBar_btn.addEventListener('click', () => {
  add_right_bar();
})
radical_btn.addEventListener('click', () => {
  add_squareRoot();
})
power_btn.addEventListener('click', () => {
  add_Power();
})

// KEYBOARD EVENTS

document.addEventListener('keydown', (event) => {
   
   // console.log(`key=${event.key},code=${event.code}`);

   key = event.key;

   switch (key)
   {
	   case "0":
	   			add_0();
	   	    break;
	   	case "1":
	   			add_1();
	   	    break;
	   
	   	case "2":
	   	    add_2();
	   	    break;
	   	
	   	case "3":
	   	    add_3();
	   	    break;

	   	case "4":
	   	    add_4();
	   	    break;

	   	case "5":
	   	    add_5();
	   	    break;

	   	case "6":
	   			add_6();
	   	    break;
	   
	   	case "7":
	   	    add_7();
	   	    break;
	   	
	   	case "8":
	   	    add_8();
	   	    break;

	   	case "9":
	   	    add_9();
	   	    break;


	   	case "+":
	   	    add_plus();
	   	    break;
	   	case "-":
	   	    add_substract();
	   	    break;
	   	case "*":
	   	    add_multiply();
	   	    break;
	   	case "/":
	   	    add_divide();
	   	    break;
	   	case "(":
	   	    add_left_bar();
	   	    break;
	   	case ")":
	   	    add_right_bar();
	   	    break;
	   	case ".":
	   	    add_virgula();
	   	    break;

	   	case "%":
	   	    add_percent();
	   	    break;

	   	case "Backspace":
	   	    remove();
	   	    break;
   		case "Enter":
	   	    calculate();
	   	    break;
	   	case "Escape":
	   	    clear();
	   	    break;

	   	case "S":
	   	    swap();
	   	    break;
	   	case "R":
	   	    add_squareRoot();
	   	    break;
	   	case "P":
	   	    add_Power();
	   	    break;
   }


});


// FUNCTIONS

function clear () {
	result.innerHTML = '';
	instantResult.innerHTML = '';
}

function remove () {
	
	tempStr = result.innerHTML;
	tempList = [];
	tempStr02 = '';
	
	for(let i = 0; i < tempStr.length; i++)
	{
		tempList.push(tempStr[i]);
	}

	tempList.pop();

	for(let i = 0; i < tempList.length; i++)
	{
		tempStr02 += tempList[i];
	}

	result.innerHTML = tempStr02;
	instant_Cal();

}

// ADD FUNCTIONS

function add_0 () {
	result.innerHTML += '0';
	instant_Cal();
	limit();
}
function add_1 () {
	result.innerHTML += '1';
	instant_Cal();
	limit();
}
function add_2 () {
	result.innerHTML += '2';
	instant_Cal();
	limit();
}
function add_3 () {
	result.innerHTML += '3';
	instant_Cal();
	limit();
}
function add_4 () {
	result.innerHTML += '4';
	instant_Cal();
	limit();
}
function add_5 () {
	result.innerHTML += '5';
	instant_Cal();
	limit();
}
function add_6 () {
	result.innerHTML += '6';
	instant_Cal();
	limit();
}
function add_7 () {
	result.innerHTML += '7';
	instant_Cal();
	limit();
}
function add_8 () {
	result.innerHTML += '8';
	instant_Cal();
	limit();
}
function add_9 () {
	result.innerHTML += '9';
	instant_Cal();
	limit();
}
function add_virgula () {
	add_to_zero();
	result.innerHTML += '.';
	no_Semne();
	instant_Cal();

}
function add_plus () {
	result.innerHTML += '+';
	no_Semne();
	instant_Cal();
}
function add_substract () {
	result.innerHTML += '-';
	no_Semne();
	instant_Cal();
}
function add_divide () {
	add_to_zero();
	result.innerHTML += '/';
	no_Semne();
	instant_Cal();
}
function add_multiply () {
	add_to_zero();
	result.innerHTML += '*';
	no_Semne();
	instant_Cal();
}
function add_left_bar () {
	result.innerHTML += '(';
	instant_Cal();
}
function add_right_bar () {
	result.innerHTML += ')';
	instant_Cal();
}
function add_squareRoot () {
	tempResult = result.innerHTML;
	tempResult = Math.sqrt(tempResult);
	result.innerHTML = tempResult;
	instant_Cal();
}
function add_Power () {
	add_to_zero();
	result.innerHTML += '**';
	no_Semne();
	instant_Cal();
}
function add_percent() {

	add_to_zero();
  result.innerHTML += '/';
  result.innerHTML += '100';
  calculate();
  instant_Cal();
}

function swap () {
	
	if(swapped == false)
	{
		radical_btn.classList.remove('hidden');
	  leftBar_btn.classList.remove('hidden');
	  rightBar_btn.classList.remove('hidden');
	  power_btn.classList.remove('hidden');
	  swapped = true;
	  result_Div.style.height = '60px'
	}
	else
	{
		radical_btn.classList.add('hidden');
	  leftBar_btn.classList.add('hidden');
	  rightBar_btn.classList.add('hidden');
	  power_btn.classList.add('hidden');
	  swapped = false;
	  result_Div.style.height = '60px'
	}
}

function no_Semne () {
	
	tempStr = result.innerHTML;
	tempList = [];
	tempI = '';
	tempStr02 = '';
	superTemp = '';

	for(let i = 0; i < tempStr.length; i++)
	{
		tempList.push(tempStr[i]);
	}

	for(let i = 0; i < tempList.length; i++)
	{
		// SA NU SE REPETE
		if(tempList[i] == '/' && tempI == '/')
		{
			tempList.splice(i, 1);
		}
		if(tempList[i] == '*' && superTemp == '*' && tempI == '*')
		{
			tempList.splice(i, 1);
		}
		if(tempList[i] == '.' && tempI == '.')
		{
			tempList.splice(i, 1);
		}
		if(tempList[i] == '+' && tempI == '+')
		{
			tempList.splice(i, 1);
		}
		if(tempList[i] == '-' && tempI == '-')
		{
			tempList.splice(i, 1);
		}
		if(tempList[i] == '.' && tempI == '.')
		{
			tempList.splice(i, 1);
		}

		// SA NU FIE MAI MULT DE 2 SEMNE

		//-------------------------------------------------------
		if(tempList[i] == '-' && tempI == '+')
		{
			tempList.splice(i, 1);
		}
		if(tempList[i] == '-' && tempI == '/')
		{
			tempList.splice(i, 1);
		}
		if(tempList[i] == '-' && tempI == '*')
		{
			tempList.splice(i, 1);
		}
		if(tempList[i] == '-' && tempI == '.')
		{
			tempList.splice(i, 1);
		}

		//++++++++++++++++++++++++++++++++++++++++++++++++++++++
		if(tempList[i] == '+' && tempI == '-')
		{
			tempList.splice(i, 1);
		}
		if(tempList[i] == '+' && tempI == '/')
		{
			tempList.splice(i, 1);
		}
		if(tempList[i] == '+' && tempI == '*')
		{
			tempList.splice(i, 1);
		}
		if(tempList[i] == '+' && tempI == '.')
		{
			tempList.splice(i, 1);
		}

		//*******************************************************
		if(tempList[i] == '*' && tempI == '-')
		{
			tempList.splice(i, 1);
		}
		if(tempList[i] == '*' && tempI == '/')
		{
			tempList.splice(i, 1);
		}
		if(tempList[i] == '*' && tempI == '+')
		{
			tempList.splice(i, 1);
		}
		if(tempList[i] == '*' && tempI == '.')
		{
			tempList.splice(i, 1);
		}

		// /////////////////////////////////////////////
		if(tempList[i] == '/' && tempI == '-')
		{
			tempList.splice(i, 1);
		}
		if(tempList[i] == '/' && tempI == '*')
		{
			tempList.splice(i, 1);
		}
		if(tempList[i] == '/' && tempI == '+')
		{
			tempList.splice(i, 1);
		}
		if(tempList[i] == '/' && tempI == '.')
		{
			tempList.splice(i, 1);
		}

		// .......................................................
		if(tempList[i] == '.' && tempI == '-')
		{
			tempList.splice(i, 1);
		}
		if(tempList[i] == '.' && tempI == '*')
		{
			tempList.splice(i, 1);
		}
		if(tempList[i] == '.' && tempI == '/')
		{
			tempList.splice(i, 1);
		}
		if(tempList[i] == '.' && tempI == '+')
		{
			tempList.splice(i, 1);
		}


		superTemp = tempI;
		tempI = tempList[i];


	}

	for(let i = 0; i < tempList.length; i++)
	{
		tempStr02 += tempList[i];
	}

	result.innerHTML = tempStr02;
}

function add_to_zero () {
	if(result.innerHTML == '')
	{
		result.innerHTML += '0';
	}
}

function calculate () {

		try {
		  operation = result.innerHTML;
			operation = eval(operation);

			result.innerHTML = operation;

			if (result.innerHTML == "undefined") {
				result.innerHTML = '';
			}
			limit();
		} catch (err) {
			console.log(err);
		}
}

function instant_Cal () {
	try {
		  operation = result.innerHTML;
			operation = eval(operation);

			instantResult.innerHTML = operation;

			if (instantResult.innerHTML == "undefined") {
				instantResult.innerHTML = '';
			}
			limit();
		} catch (err) {
			console.log(err);
		}
}

function limit() {
	
	resultLen = result.innerHTML.length;
	neededRemoves = resultLen - 25;

	if(neededRemoves > 1)
	{
		for (let i = 0; i < neededRemoves; i++) 
		{
			remove();
		}
	}
	
}