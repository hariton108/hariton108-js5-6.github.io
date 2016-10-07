start.addEventListener("click", startTimer);
pause.addEventListener("click", stopTimer);
reset.addEventListener("click", clearTimer);
split.addEventListener("click", splitTimer);
pause.hidden = true;

var count = 0, timerId, go = true;

var countStart = timer.innerHTML = "00" + ":" + "00" + ":" + "00" + "." + "000";

function startTimer() {
	if (go == true) {
		timerId = setInterval(function() {
			count = count + 4;
			var msek = Math.floor(count%1000);		
			var sek = Math.floor(count/1000)%60;
			var min = Math.floor(count/60000)%60;
			var hour = Math.floor(count/3600000)%24;
			if (msek < 10) {msek = "00" + msek;};
			if (msek >= 10 && msek < 100) {msek = "0" + msek;};
			if (sek < 10) {sek = "0" + sek;};
			if (min < 10) {min = "0" + min;};
			if (hour < 10) {hour = "0" + hour;};
			var result = hour + ":" + min + ":" + sek + "." + msek;
			timer.innerHTML = result;
		}, 4);
		go = false;
		start.hidden = true;
		pause.hidden = false;
	}
}

function stopTimer() {
	clearInterval(timerId);
  	go = true;
  	start.hidden = false;
	pause.hidden = true;
	var fixedResult = document.createElement('li');
	fixedResult.innerHTML = "Stop: " + timer.innerHTML;
	data.appendChild(fixedResult);
}

function clearTimer(){
	clearInterval(timerId);
	go = true;
	timer.innerHTML=countStart;
	count = 0;
	start.hidden = false;
	pause.hidden = true;
	data.innerHTML = '';
}

function splitTimer() {
	if (go == false) {
		var fixedResult = document.createElement('li');
		fixedResult.innerHTML = "Split: " + timer.innerHTML;
		data.appendChild(fixedResult);	
	}	
}