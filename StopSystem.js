// JavaScript Document
function stopServer(){
	let application= new XMLHttpRequest();
	const server = "https://api.winnipegtransit.com/v3/stops/10064/schedule.json?api-key=";
	const key = "bk2loHLj18c4SxDp8eJc";
	const accessURL = server+key;
	Boolean permission = false;
	
	//request server
	application.open("GET",accessURL,true);
	application.send();
	
	//validate permission
	if(application.readyState==4 && application.status==200){
	   permission = true;
	   }
	
	//permission granted
	if(permission==true){
		let information = JSON.parse(application.responseText);

		
		document.getElementById("stop").textContent=information.number;
	}
	
	
}

stopServer().onload;
