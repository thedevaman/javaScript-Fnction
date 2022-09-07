
//find age
// let  age = prompt("Enter Your age")
// age = Number.parseInt(age)

const canDrive = (age)=>{
return age>=18?true:false
}




//asking for prompt
let runAgain = true
while (runAgain){
	let  age = prompt("Enter Your age")
age = Number.parseInt(age)

if(canDrive(age))
{
	alert('Yes You can drive')
}else{
	alert("you can not drive")
}

//console error

if (age<0) {
	console.error('Enter valid age')
	break;
}

runAgain=confirm("Do you want to play again")
}

