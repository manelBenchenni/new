/*var qst= document.getElementsByClassName('questions');
var input = document.getElementById('input');

var chois= document.getElementsByClassName('choises');
var count =-1;
var score = 0;
var input2 = document.querySelectorAll('input')[1];
input.onclick = function(){
    if(count==-1){
        input.value='Next';
    }
    count++;
    qst[count].classList.remove('inactive');
    chois[count].classList.remove('inactive');
    for(var j=0 ;j<qst.length;j++){
        if(j!=count){
            qst[j].classList.add('inactive');
            chois[j].classList.add('inactive');
        }
    }
  
  if(count==2){
   input2.value = `Your score is ${score}`;
    qst[count].classList.add('inactive');
    chois[count].classList.add('inactive');
      input2.classList.remove('inactive');
   }
}
var right=['manel','engineer','20'];
var ch = document.getElementsByClassName('ch');
var k=0;

function check(){
    if(k>=ch.length)
        k=0;
    if(this.innerHTML==right[k]){
        this.classList.toggle('right');
      score++;
    }
      
    else{
        this.classList.toggle('false');
       
    }
   

  k++;
}
for(var i=0 ; i<ch.length ; i++){
  
     ch[i].addEventListener('click',check);
}
*/
document.addEventListener('DOMContentLoaded', (event) => {
    var qst = document.getElementsByClassName('questions');
    var input = document.getElementById('input');
    var chois = document.getElementsByClassName('choises');
    var count = -1;
    var score = 0;
    var input2 = document.querySelectorAll('input')[1];

    // Debugging: Check if elements are loaded correctly
    console.log("Questions elements:", qst);
    console.log("Choices elements:", chois);
    console.log("Initial input button:", input);
    console.log("Final score input:", input2);

    input.onclick = function(e){
        e.preventDefault();  // Prevent form submission
        if(count == -1){
            input.value = 'Next';
        }
        count++;
        
        // Debugging: Log current count
        console.log("Current question index:", count);

        if (count < qst.length) {
            qst[count].classList.remove('inactive');
            chois[count].classList.remove('inactive');
        }

        for(var j = 0; j < qst.length; j++){
            if(j != count){
                qst[j].classList.add('inactive');
                chois[j].classList.add('inactive');
            }
        }

        if(count == qst.length){
            input2.value = `Your score is ${score}`;
            input.classList.add('inactive');
            input2.classList.remove('inactive');
        }
    }

    var right = ['manel', 'engineer', '20'];
    var ch = document.getElementsByClassName('ch');
    var k = 0;

    function check(){
        console.log("Checking choice:", this.innerHTML, "against:", right[count]);
        if(this.innerHTML == right[count]){
            this.classList.add('right');
            score++;
        } else {
            this.classList.add('false');
        }
    }

    for(var i = 0; i < ch.length; i++){
        ch[i].addEventListener('click', check);
    }
});
