let counter = document.querySelector('.counter');
const addcount = document.querySelector('#addCountbtn');
const lowercount = document.querySelector('#lowerCountbtn');

 let count = 0;

 addcount.addEventListener('click',uper);
 lowercount.addEventListener('click',down);

 function uper(){
     count++;
     counter.innerHTML = count;
     
     if (counter.innerHTML> '0'){
         counter.style.color = 'green'
     }
     
      else if (counter.innerHTML=== '0'){
         counter.style.color = 'white'
     }
 }

 function down(){
     count--;
     counter.innerHTML = count;

     
     if (counter.innerHTML< '0'){
        counter.style.color = 'red'
    }
    
     else if (counter.innerHTML=== '0'){
        counter.style.color = 'white'
    }
 }