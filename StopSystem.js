var req = new XMLHttpRequest();
var url = "https://api.winnipegtransit.com/v3/stops/10064/schedule.json?api-key=";
var api_key = "bk2loHLj18c4SxDp8eJc";

req.open("GET", url + api_key);
req.send();

req.addEventListener("load", function(){
	if(req.status == 200 && req.readyState == 4){
  	var response = JSON.parse(req.responseText);
    document.getElementById("stop").textContent = response.stop;   
  }
})
