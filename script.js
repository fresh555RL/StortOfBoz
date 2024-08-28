const SortType = document.getElementById('SType');
const SortN = document.getElementById('SNum');
const SortA = document.getElementById('Sort-a');
const RandButt = document.getElementById('Ran');
const SortButt = document.getElementById('Sor');
const CrButt = document.getElementById('CreateButt');
const InfoText = document.getElementById('info-text');
const ClearButt = document.getElementById('clearbutton');
// const Coutput = document.getElementById('consoleOutput');
var intest = 5;
var CompareCount = 0;
function ComparePlus(){
    CompareCount++;
    InfoText.innerText = `${SortType.value} sort - ${CompareCount.toLocaleString()} compares`;

}
InfoText.innerText = `${SortType.value} sort - ${CompareCount} compares`;
intest++;
intest++;

var intervalId;
console.log(Math);
// function logToPage(message) {
//     const consoleOutput = document.getElementById('consoleOutput');
//     const newMessage = document.createElement('div');
//     newMessage.textContent = message;
//     consoleOutput.appendChild(newMessage);
// }


function clearInt(){
    clearInterval(intervalId);
    VisibleOn();
    // Create();
    // SortButt.style.display = 'inline-block';
}


function VisibleOn(){
    CrButt.style.display = "inline-block";;
    // SortButt.style.visibility = "visible";
    RandButt.style.display = "inline-block";; 
    ClearButt.style.display = 'none';
}
function VisibleOff(){
    CrButt.style.display = 'none';
    SortButt.style.display = 'none';
    RandButt.style.display = 'none';
    ClearButt.style.display = 'inline-block';
}


function Create(){
    CompareCount = 0;
    InfoText.innerText = `${SortType.value} sort - ${CompareCount.toLocaleString()} compares`;
    if(SortType.value=='Bogo'){InfoText.innerText = `${SortType.value} sort - 0 tries, 0 max elements on correct places`;}
    SortA.style.width = "70%"; 
   
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
    RandButt.style.display = "inline-block";
    // console.log(SortA.children);
}


function RandomD() {
    Create();
    // console.log(SortA.children);
    

    [...SortA.children].forEach(element => {
        let swapwith = Math.floor( Math.random() * SortA.children.length );
        
        let h1 = element.style.height;
        let h2 = SortA.children[swapwith].style.height;
        element.style.height = h2;
        SortA.children[swapwith].style.height = h1;

    });
    


    SortButt.style.display = "inline-block";
}



function DoSort(){
    
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
    if(SortType.value =='Selection'){
        SelectionSort();
    }
    if(SortType.value =='Focus'){
        PokusSort();
    }

   
}



function StalinSort(){
    VisibleOff();
    

    let Alength = SortA.children.length;
    let i = 1;
    
    intervalId = setInterval(function(){ 
        if (i<Alength){
            // let flag=false;
            // SortA.children[i].style.backgroundColor = 'green';
            let e1 = parseFloat(SortA.children[i].style.height);
            let e2 = parseFloat(SortA.children[i-1].style.height); 
            ComparePlus();
            if(e1<e2) {
                
            
                flag=true;
               
                
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
    let ThisCount=0;
    let MaxCount=0;
    let CountTries = 0;
    


    let Alength = SortA.children.length;
    
    
    intervalId = setInterval(function(){ 
        ThisCount=0;;
        CountTries++;
        
        let sorted = true;
        for(let i=1;i<Alength;i++){
            // ComparePlus();
            let e1 = parseFloat(SortA.children[i].style.height);
            let e2 = parseFloat(SortA.children[i-1].style.height);
            if(e1<e2){sorted=false;}
            else{ThisCount++;}
        }
        MaxCount = (MaxCount>ThisCount?MaxCount:ThisCount);
        InfoText.innerText = `${SortType.value} sort - ${CountTries.toLocaleString()} tries, ${MaxCount+1} max elements on correct places`;
        if (!sorted){
            [...SortA.children].forEach(element => {
                let swapwith = Math.floor( Math.random() * SortA.children.length );
               
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



function BubbleSort() {
    VisibleOff();
    let timeer;
    let CountN = parseInt(SortN.value);
    if(CountN<=16){timeer=250;}
    else if (CountN<=64){timeer=100;}
    else if(CountN<=512){timeer=20;}
    else{timeer=1;}
    // console.log(timeer);
    // console.log(12312312);
    let Alength = SortA.children.length;
    let j = 0;
    for (let i = 0; i < Alength; i++) {
        SortA.children[i].style.backgroundColor = "red"; 
    }
    intervalId = setInterval(function() { 
        if (j < Alength) {
            for (let i = 0; i < Alength - j - 1; i++) {
                 
                let e1 = parseFloat(SortA.children[i].style.height);
                let e2 = parseFloat(SortA.children[i + 1].style.height);
                if (e1 > e2) {
                    CompareCount++;
                    
                    SortA.children[i].style.height = e2 + "%";
                    SortA.children[i + 1].style.height = e1 + "%";
                }
                
            }
            InfoText.innerText = `${SortType.value} sort - ${CompareCount.toLocaleString()} swaps`;
            SortA.children[Alength - j - 1].style.backgroundColor = "wheat"; 
            j++;
        } else {
            clearInterval(intervalId);
            VisibleOn();  
        }
    }, timeer);
}

   
function PokusSort() {
    VisibleOff();
    let timeer;
    let CountN = parseInt(SortN.value);
    if(CountN<=16){timeer=250;}
    else if (CountN<=64){timeer=100;}
    else if(CountN<=512){timeer=20;}
    else{timeer=1;}
    let Alength = SortA.children.length;

   
    let heights = [];
    for (let i = 0; i < Alength; i++) {
        heights[i] = parseFloat(SortA.children[i].style.height);
        SortA.children[i].style.backgroundColor = 'red';
    }

    let j = 1;

    intervalId = setInterval(function () {
        if (j < Alength) {
            let i = j;

            while (i > 0 && heights[i] < heights[i - 1]) {
                CompareCount--;
                InfoText.innerText = `${SortType.value} sort - ${CompareCount} compares`;
               
                [heights[i], heights[i - 1]] = [heights[i - 1], heights[i]];
                i--;
            }

            SortA.children[j].style.backgroundColor = "wheat";
            j++;
        } else {
            clearInterval(intervalId);
            VisibleOn();
            
            for (let i = 0; i < Alength; i++) {
                SortA.children[i].style.height = heights[i] + "%";
            }
        }
    }, timeer);
}


function InsertionSort(){
    VisibleOff();
    let timeer;
    let CountN = parseInt(SortN.value);
    if(CountN<=16){timeer=250;}
    else if (CountN<=64){timeer=100;}
    else if(CountN<=512){timeer=20;}
    else{timeer=1;}

    let Alength = SortA.children.length;
    
    let j=0;
    for(let i=0;i<Alength;i++){
        SortA.children[i].style.backgroundColor = "red"; 
    }
    intervalId = setInterval(function(){ 
        
        if(j<Alength){
            
            for(let i=j;i!=0;i--){
                ComparePlus();
                 
                

                let e1 = parseFloat(SortA.children[i].style.height);
                let e2 = parseFloat(SortA.children[i-1].style.height);
                if (e1<e2){
                    SortA.children[i].style.height = e2 + "%";
                    SortA.children[i-1].style.height = e1 + "%";
                }  
                else{break;}
                
                

                
            }
            
            SortA.children[j].style.backgroundColor = "wheat"; 
            j++;
        


        }
        else{
            clearInterval(intervalId);
            VisibleOn();  
        }
        
         
    }, timeer);
      
}



function SelectionSort(){

    VisibleOff();
    
    let timeer;
    let CountN = parseInt(SortN.value);
    if(CountN<=16){timeer=250;}
    else if (CountN<=64){timeer=100;}
    else if(CountN<=512){timeer=20;}
    else{timeer=1;}

    let Alength = SortA.children.length;
    let j=0;
    
    for(let i=0;i<Alength;i++){
        SortA.children[i].style.backgroundColor = "red"; 
    }

    intervalId = setInterval(function(){ 
        //меняем с джейтым элементом
        if(j<Alength){
            
            
            let mini = j;
            for(let i=j+1;i<Alength;i++){
                ComparePlus();
                let e1 = parseFloat(SortA.children[mini].style.height);
                let e2 = parseFloat(SortA.children[i].style.height);
                if(e1>e2){mini=i;}
                
            }
        
                if(j!==mini){
            let e1 = parseFloat(SortA.children[mini].style.height);
            let e2 = parseFloat(SortA.children[j].style.height);
            SortA.children[mini].style.height = e2 + "%";
            SortA.children[j].style.height = e1 + "%";
                }
            SortA.children[j].style.backgroundColor = 'wheat';
            j++;
               
            
        }
        

    
        else{
            clearInterval(intervalId);
            VisibleOn();  
        }
        
         
    }, timeer  );




}