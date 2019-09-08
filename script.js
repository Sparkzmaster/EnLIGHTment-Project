function CalculateEnergy(){
	var totalEnergy = document.getElementById("MonthyEnergy").value;
	
	if (1 <= totalEnergy && totalEnergy <= 99999){
		var totalKg = totalEnergy * 0.155 * 0.28307;
		var motorBikes = totalKg * 10;
		
		var x = parseInt(totalEnergy);
		var a = x.toFixed(2);
		var b = motorBikes.toFixed(2);
		
		document.getElementById("Total").innerHTML = 
		"With " + a + "kWh you could of driven a standard motorcycle "
		+ b + " km.";
		
	} else {
		console.log("This is a negative number.");
		
	}
}



function DisplayElement(){
	document.getElementById("InfoLEDBulbs").style.display = "none";
	document.getElementById("InfoSolarPanels").style.display = "none";
	document.getElementById("InfoHeatPumps").style.display = "none";
	document.getElementById("InfoConventionalOvens").style.display = "none";
	
	text = document.getElementById("OptionMenu").value;
	document.getElementById(text).style.display = "block";
}
