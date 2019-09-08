function CalculateEnergy(){
	var totalEnergy = document.getElementById("MonthyEnergy").value;
	
	if (1 <= totalEnergy && totalEnergy <= 99999){
		var totalKg = totalEnergy * 0.155 * 0.28307;
		var motorBikes = totalKg * 10;
		
		document.getElementById("Total").innerHTML = 
		"With " + totalEnergy + "kWh you could of driven a standard motorcycle "
		+ (motorBikes).toFixed(2) + " km.";
		
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
