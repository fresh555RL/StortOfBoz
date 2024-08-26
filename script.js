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




function VisibleOn(){
    CrButt.style.visibility = "visible";
    SortButt.style.visibility = "visible";
    RandButt.style.visibility = 'visible'; 
}
function VisibleOff(){
    CrButt.style.visibility = "hidden";
    SortButt.style.visibility = "hidden";
    RandButt.style.visibility = 'hidden';
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
    if(SortType.value == 'Bubble'){
        BubbleSort();
    }
    if(SortType.value == 'Insertion'){
        InsertionSort();
    }



   
}



function StalinSort(){
    VisibleOff();
    

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
            VisibleOn();   
            clearInterval(intervalId); // Остановить интервал после завершения
        }
    }, 1);
   
   

}



function BogoSort(){
    VisibleOff();

    

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
            VisibleOn();   
            clearInterval(intervalId); // Остановить интервал после завершения
        }
    }, 100);

}



function BubbleSort(){

    VisibleOff();
    

    let Alength = SortA.children.length;
    let i=0;
    let j=0;
    
    const intervalId = setInterval(function(){ 
        
        if(j<Alength){

            if(i<Alength-j-1){
                
                SortA.children[i].style.backgroundColor = "red"; 
                SortA.children[i+1].style.backgroundColor = "red";

                let e1 = parseFloat(SortA.children[i].style.height);
                let e2 = parseFloat(SortA.children[i+1].style.height);
                if (e1>e2){
                    SortA.children[i].style.height = e2 + "%";
                    SortA.children[i+1].style.height = e1 + "%";
                }
                
                setTimeout(() => {
                    SortA.children[i].style.backgroundColor = "wheat"; 
                    SortA.children[i + 1].style.backgroundColor = "wheat";
                }, 1);

                i++;
            }
            else{
                i=0;
                j++;
            }


        }
        else{
            clearInterval(intervalId);
            VisibleOn();  
        }
        
         
    }, 1);
        
}
   
   
function InsertionSort(){
    VisibleOff();
    
    

    let Alength = SortA.children.length;

    for(let i=1;i<Alength;i++){
        SortA.children[i].style.backgroundColor='red';
    }
    let j=1;
    let i=j;

    const intervalId = setInterval(function(){ 
        
        if(j<Alength){
            SortA.children[j].style.backgroundColor = "red"; 
            if(i!=0){
                
                // SortA.children[i].style.backgroundColor = "red"; 
                // SortA.children[i-1].style.backgroundColor = "red";

                let e1 = parseFloat(SortA.children[i].style.height);
                let e2 = parseFloat(SortA.children[i-1].style.height);
                if (e1<e2){
                  
                    SortA.children[i].style.height = e2 + "%";
                    SortA.children[i-   1].style.height = e1 + "%";
                }
                
                // setTimeout(() => {
                    // SortA.children[i].style.backgroundColor = "wheat"; 
                //     // SortA.children[i - 1].style.backgroundColor = "wheat";
                // }, 15);

                i--;
            }
            else{
                SortA.children[j].style.backgroundColor = "wheat"; 
                j++;
                i=j;
                
            }


        }
        else{
            clearInterval(intervalId);
            VisibleOn();  
        }
        
         
    }, 1        );


}
