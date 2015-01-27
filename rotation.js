var howOften = 2; //number often in seconds to rotate
var current = 0; //start the counter at 0
var ns6 = document.getElementById&&!document.all; //detect netscape 6

// place your images, text, etc in the array elements here
var items = new Array();
    items[0]="<img alt='alyssa title' src='img/alyssatitle.png' height='700' width='1200' border='0'/>";
    
    items[1]="<img alt='alyssa keg' src='img/alyssa1.jpg' height='1200' width='900' border='0'/>"; 

    items[2]="<img alt='stairs' src='img/alyssa2.JPG' height=auto width='900' border='0'/> "; 

    items[3]="<img alt='boat desk' src='img/alyssa3.JPG' height='700' width='900' border='0'/>"; 

    items[4]="<img alt='image3 (9K)' src= 'img/alyssa4.JPG' height='1200' width='900' border='0'/>";

    items[5]="<img alt='image4 (9K)' src='img/alyssa5.JPG' height='1200' width='900' border='0'/>"; 

    items[6]="<img alt='stool' src='img/alyssa6.JPG' height='1200' width='900' border='0'/>"; 

    items[7]="<img alt='image3 (9K)' src= 'img/alyssa7.JPG' height='900' width='700' border='0'/>"; 

    items[8]="<img alt='alyssa desk' src='img/alyssa8.JPG' height='1200' width='900' border='0'/>"; 

    items[9]="<img alt='image5 (18K)' src='img/alyssa9.JPG' height='900' width='700' border='0'/>";
    items[10]="<img alt='image3 (9K)' src= 'img/alyssa10.JPG' height='1200' width='900' border='0'/>"; 
    

function rotater() {
    document.getElementById("placeholder").innerHTML = items[current];
    current = (current==items.length-1) ? 0 : current + 1;
    setTimeout("rotater()",howOften*1000);
}

// function rotater() {
//     if(document.layers) {
//         document.placeholderlayer.document.write(items[current]);
//         document.placeholderlayer.document.close();
//     }
//     if(ns6)document.getElementById("placeholderdiv").innerHTML=items[current]
//         if(document.all)
//             placeholderdiv.innerHTML=items[current];

//     current = (current==items.length-1) ? 0 : current + 1; //increment or reset
//     setTimeout("rotater()",howOften*1000);
// }
window.onload=rotater;