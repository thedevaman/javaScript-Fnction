
let x = function(e){
	console.log(e.type,e.clientX,e.clientY)

	alert("Hello Event 1")
}
let y = function(e){
	alert("Hello Event 2")
}


btn.addEventListener('click',x)

btn.addEventListener('click',y)

let a = prompt("enter a number");

if(a=="2")
{
	btn.removeEventListener('click',x)
}