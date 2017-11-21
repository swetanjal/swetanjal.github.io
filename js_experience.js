var cnt=0;
var timer=null;
var flag_autoplay=1;
var A=["Published a paper entitled <a href='https://www.ijser.org/onlineResearchPaperViewer.aspx?HOME-AUTOMATION.pdf' target='_blank'>Home Automation</a> in the International Journal of Scientific Engineering and Research(IJSER).<br/>The main objective/aim of this IOT(Internet of Things) prototype is to save electricity by controlling electrical appliances using cell phone from any part of the world. Also the status of the electrical appliances can be received in the cell phone itself. This data can be used in many ways to save electricity.",
	"Designed a handful of games using UNITY3D and also built patches for Flight Simulator X, EA Sports Cricket 07 and EA Sports Fifa 06.",
	"Built a software to make the process of keeping track of attendance of students easy and efficient."]
function next(){
	cnt=cnt+1;
	
	cnt=(cnt%A.length);
	if(flag_autoplay==1){
		window.clearInterval(timer);
		timer=window.setInterval(next,7000);	
	}
	document.getElementById("Projects_info").innerHTML=A[cnt];
}
function prev(){
	cnt=cnt-1;
	if(cnt<0)cnt=cnt+3;
	cnt=(cnt%A.length);
	if(flag_autoplay==1){
		window.clearInterval(timer);
		timer=window.setInterval(next,7000);	
	}
	document.getElementById("Projects_info").innerHTML=A[cnt];	
}
timer=window.setInterval(next,7000);