
const secondHand = document.querySelector(".second-hand")
const minuteHand = document.querySelector(".min-hand")
const hourHand = document.querySelector(".hour-hand")

function setDate(){
	const now = new Date();

	const seconds = now.getSeconds();
	console.log(seconds)
	const secondDegrees = ((seconds / 60) * 360 + 90);
	secondHand.style.transform = `rotate(${secondDegrees}deg)`;

	const minutes = now.getMinutes();
	console.log(minutes)
	const minuteDegrees = ((minutes / 60) * 360 + 90);
	minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

	const hours = now.getHours();
	console.log(hours)
	const hourDegrees = ((hours / 12) * 360 + 90);
	hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000)
