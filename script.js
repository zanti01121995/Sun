var h1 = document.createElement("h1");
h1.innerHTML="Sun Rise and Sun Set";
h1.style.textAlign="center";

document.body.append(h1);
var br=document.createElement("br")
var div = document.createElement("div");
div.style.textAlign="center";
var input= document.createElement("input");
input.setAttribute("type","number");
input.setAttribute("placeholder","Enter the Latitude")
input.setAttribute("id","lat");
input.style.marginRight="10px";
var input1= document.createElement("input");
input1.setAttribute("type","number");
input1.setAttribute("placeholder","Enter the Longitude")
input1.setAttribute("id","lon");

var button = document.createElement("button")
button.innerHTML="Search";
button.classList.add("btn","btn-primary");
button.style.marginTop="10px";
button.addEventListener("click",data);

div.append(input,input1,br,button)
document.body.append(div)

async function data(){
    let d = document.getElementById("lat").value;
    let d1 = document.getElementById("lon").value;
    let url = `
    https://api.sunrise-sunset.org/json?lat=${d1}&lng=${d}`;
    let d2 =await fetch(url);
    let d3 =await d2.json();
    

    console.log(d3)
    foo(d3,d,d1);
}

function foo(d3,d,d1){
      
        
       var div2 = document.createElement("div");
           div2.style.marginTop="20px"
           div2 .innerHTML+=`
           <div class="col">
               <div class="card">
                   <div class="card-header">
                     <h6>Sun Movement at lat${d} and lon${d1}</h6>
                   </div>
                   <div class="card-body">
                    <p><b>Sun Raise</b> : ${d3.results.sunrise}</p>
                    <p><b>Sun Set</b> : ${d3.results.sunset}</p>
                    <p><b>Solar Noon</b> : ${d3.results.solar_noon}</p>
                    <p><b>Day Length</b> : ${d3.results.day_length} hours</p>
                   </div>
                 </div>
           </div>
            `
               document.body.append(div2);
    
        
    }
