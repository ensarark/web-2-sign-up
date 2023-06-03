
function btn2(){
    document.getElementById("gizle").style.display="inline";
    setTimeout(()=> {
        window.location.href="üye-ol.html"
     }
     ,2000);
    
}
function Map123() {  
    var mapOptions = {  
        center:new google.maps.LatLng(51.508742,-0.120850),  
        zoom: 10,  
        mapTypeId: google.maps.MapTypeId.HYBRID  
    }  
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);  
    } 