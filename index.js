const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
"P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i",
"j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", 
"2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*",
"(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
let p1E1 = document.getElementById("ps1");
let p1E2 = document.getElementById("ps2");
let arr=[],arr1=[];
let i;

function newPswd(){
    for(i=0 ; i<15 ; i++){
        let random = Math.floor(Math.random()*characters.length);
        let random2 = Math.floor(Math.random()*characters.length);
        arr.push(random)
        arr1.push(random2)
    }
    let str = "" , str1="";
    for(i=0;i<15;i++){
        str += (characters[arr[i]])
        str1 += (characters[arr1[i]])
    }
    p1E1.textContent=str;
    p1E2.textContent=str1;
}

