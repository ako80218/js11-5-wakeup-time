$(document).ready( function(){

	//create a  date object
	var date = new Date();
	// console.log(date.getMinutes());
	var pm = false;

	//get  minutes and hours
	var minutes = date.getMinutes();
	//get  hours and account for hour values greater than 12 and if am or pm
	var hours = date.getHours();
	if (hours > 12){hours = hours -12
		pm = true;
	};
	//convert minute value to a string and account for minute value less than 10
	var displayedMinutes = minutes.toString();
	if (minutes<10){displayedMinutes = '0' + displayedMinutes;}
	//convert minute value to a string and account for minute value less than 10
	var displayedHours = hours.toString();
	if (hours<10){displayedHours = '0' + displayedHours;}
	
	
	// var setTime  = function()




	var displayElements
	var amValues = ['AM', '88', '92', '96', '102', '106', '108'];
	var fmValues =  ['FM', '53','60', '70', '90', '110', '140', '170'];



	var $container = $("#container");
	//Create an outer shell div and append it to #container
	$container.append($('<div id="outer-shell" class="outer-shell">'));

	//create an inner shell div and append  #outer-shell
	$('#outer-shell').append($('<div id="inner-shell" class="inner-shell">'));
	$('#inner-shell').append($('<ul id="pm-auto" class="pm-auto">'));
	$('#inner-shell').append($('<div id="screen" class="screen">'));
	$('#inner-shell').append($('<ul id="display-am-fm" class="display-am-fm" >'));
	$('#display-am-fm').append($('<li id="fm"class="fm" >'));
	$('#display-am-fm').append($('<li id="am"class="am" >'));

	$('#pm-auto').append($('<li id="pm" class="pm">PM</li>'));
	if (pm === true){$('#pm').append($('<span class="dot">.')).find('.dot').text('.')}
	$('.fm').append($('<ul id="display-fm" class="dislay-fm">'));
	$('#pm-auto').append($('<li id="auto" class="auto">Auto</li>'));
	$('.am').append($('<ul id="display-am" class="dislay-am">'));
	for(var i=0; i<fmValues.length; i++){
		$("#display-fm").append($('<li class="frequency">' + fmValues[i] + '</li>'));
	}
	for(var i=0; i<amValues.length; i++){
		$("#display-am").append($('<li class="frequency">' + amValues[i] + '</li>'));
	}
	
	//append the elements for the screen time display 
	$('#screen').append($('<span id="time-hour" class="time time-hour">')).find('#time-hour').text(displayedHours);
	$('#screen').append($('<span id="time-colon" class="time time-colon ">')).find('#time-colon').text(':');
	$('#screen').append($('<span id="time-minute" class="time time-minute ">')).find('#time-minute').text(displayedMinutes);

	



});
