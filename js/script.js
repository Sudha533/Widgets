
/* ===== Carousal Profile images =======  */

var profileImg1 = "images/sudha.jpg";
var profileImg2 = "images/sudha2.jpg";
var profileImg3 = "images/sudha3.jpg";
var profileImg4 = "images/sudha4.jpg";
var imagesBSP = [ profileImg1,profileImg2,profileImg3,profileImg4];
var k = 0;
var renewImg = setInterval(function(){ 
		if (k == 0){
			document.getElementById("profile-img").src = profileImg1;
			
		}
		if (k == 2){
			document.getElementById("profile-img").src = profileImg2;
			
		}
		if (k == 5){
			document.getElementById("profile-img").src = profileImg3;
			
		}
		if (k == 8){
			document.getElementById("profile-img").src = profileImg4;
			
		}
		if (k == 11){
			document.getElementById("profile-img").src = profileImg1;
			
			k=0; 
		}
			document.getElementById("timer").value=k;
			k++;
		
	},700); // time set
	
/* ======== Hide and Show Menu ========== */
/* ===== Show the menu content ====*/ 
function showContent(id){
var expandContent = document.getElementById(id);
		if(expandContent.style.display == 'block'){
			expandContent.style.display = "none"; //hide
	    }	
		else{
			expandContent.style.display = "block"; //trigger
			
		}
		hideContent(id);
		return false;
}

/* ===== Hide the content ====*/ 
function hideContent(id){
		if(id != "user-detail"){document.getElementById('user-detail').style.display = "none";} //hide
		if(id != "web-statistics"){document.getElementById('web-statistics').style.display = "none";} //hide
		if(id != "upload-settings"){document.getElementById('upload-settings').style.display = "none";}  //hide
		if(id != "events"){document.getElementById('events').style.display = "none";}  //hide
}


