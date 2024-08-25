const SortType = document.getElementById('SType');
const SortN = document.getElementById('SNum');
const SortA = document.getElementById('Sort-a');
const RandButt = document.getElementById('Ran');
const SortButt = document.getElementById('Sor');
const CrButt = document.getElementById('CreateButt');
// const Coutput = document.getElementById('consoleOutput');


console.log(Math);
function logToPage(message) {
    const consoleOutput = document.getElementById('consoleOutput');
    const newMessage = document.createElement('div');
    newMessage.textContent = message;
    consoleOutput.appendChild(newMessage);
}








function Create(){
    SortA.style.width = "1024px"; 
   
    let CountN = parseInt(SortN.value);
    SortA.innerHTML = '';

    
    let divWidthPercent = (100 / CountN).toFixed(8);

    for(let i = 0; i < CountN; i++){
        let ndiv = document.createElement("div");
        ndiv.style.width = divWidthPercent + "%";  
        ndiv.style.backgroundColor = 'wheat';
        ndiv.style.height = (100 / CountN * (i + 1)) + "%"; 
        SortA.appendChild(ndiv);
    }    
    RandButt.style.visibility = "visible";
    console.log(SortA.children);
}


function RandomD() {
    Create();
    console.log(SortA.children);
    // logToPage(SortA.children.length);
    [...SortA.children].forEach(element => {
        let swapwith = Math.floor( Math.random() * SortA.children.length );
        logToPage(swapwith);
        let h1 = element.style.height;
        let h2 = SortA.children[swapwith].style.height;
        element.style.height = h2;
        SortA.children[swapwith].style.height = h1;

    });
    logToPage(SortA.children[4].style.height);


    SortButt.style.visibility = "visible";
}



function DoSort(){
    logToPage(SortType.value);
    
    if(SortType.value == 'Stalin'){
    StalinSort();
    }
    if(SortType.value == 'Bogo'){
        BogoSort();
    }





   
}



function StalinSort(){
    CrButt.style.visibility = "hidden";
    SortButt.style.visibility = "hidden";
    RandButt.style.visibility = 'hidden';
    

    let Alength = SortA.children.length;
    let i = 1;
    
    const intervalId = setInterval(function(){ 
        if (i<Alength){
            // let flag=false;
            // SortA.children[i].style.backgroundColor = 'green';
            let e1 = parseFloat(SortA.children[i].style.height);
            let e2 = parseFloat(SortA.children[i-1].style.height); 
            if(e1<e2) {
                flag=true;
                logToPage(`${i}: ${e1} and ${e2}`);
                
                SortA.children[i].remove();
                i--;
                Alength--;

            }
            // if(flag){SortA.children[i].style.backgroundColor = 'wheat';}
        i++;
        }
        else {
            CrButt.style.visibility = "visible";
            SortButt.style.visibility = "visible";
            RandButt.style.visibility = 'visible';    
            clearInterval(intervalId); // Остановить интервал после завершения
        }
    }, 1);
   
   

}



function BogoSort(){
    CrButt.style.visibility = "hidden";
    SortButt.style.visibility = "hidden";
    RandButt.style.visibility = 'hidden';
    

    let Alength = SortA.children.length;
    
    
    const intervalId = setInterval(function(){ 
        let sorted = true;
        for(let i=1;i<Alength;i++){
            let e1 = parseFloat(SortA.children[i].style.height);
            let e2 = parseFloat(SortA.children[i-1].style.height);
            if(e1<e2){sorted=false;}
        }
        if (!sorted){
            [...SortA.children].forEach(element => {
                let swapwith = Math.floor( Math.random() * SortA.children.length );
                logToPage(swapwith);
                let h1 = element.style.height;
                let h2 = SortA.children[swapwith].style.height;
                element.style.height = h2;
                SortA.children[swapwith].style.height = h1;
        
            });
            
        }
        else {
            CrButt.style.visibility = "visible";
            SortButt.style.visibility = "visible";
            RandButt.style.visibility = 'visible';    
            clearInterval(intervalId); // Остановить интервал после завершения
        }
    }, 100);
}


