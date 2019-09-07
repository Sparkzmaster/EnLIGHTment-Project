function CalculateEnergy(){
	var totalEnergy = document.getElementById("energytotal").value;
	var totalKg = totalEnergy * 0.161 * 0.28307;
	var motorBikes = totalKg * 10;
	document.getElementById("pBikes").innerHTML = motorBikes + " km.";
}
function aSelectFunction(){
document.getElementById("aMagicSelect").style.display = "none";
document.getElementById("bMagicSelect").style.display = "none";
document.getElementById("cMagicSelect").style.display = "none";
document.getElementById("dMagicSelect").style.display = "none";

text = document.getElementById("aSelect").value;
document.getElementById(text).style.display = "block";

}