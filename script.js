/* Task 1 */

var heading=document.getElementById('heading');
console.log(heading.innerText);
/*heading.innerText="Changed it";*/
/*heading.innerHTML=<h3>"Changed it"</h3>;*/
/* Task 2 using plain JavaScript */
var textBtn=document.getElementById('addText2');
textBtn.addEventListener('click',function(event){
   var task2=document.getElementById('task2a');
   task2.innerText="Hello World";
   var paragraph = document.createElement('p');
   paragraph.innerText="Hello World";
   task2.appendChild('paragraph');
});

function changeBGcolor(event){
    var body=document.getElementsByTagName('body')[0];
    if(event.target.innerText=="Red"){
        body.style.backgroundColor='red';
    }
    if(event.target.innerText=="Green"){
        body.style.backgroundColor='green';
    }
}

function redirectToGoogle(event){
    window,location.assign("https://www.google.com");
}

/* Task 4a using jQuery */
$('#addText4').click(function(event){
    var paragraph = $('<p>').text('Hello world');
    $('#task4a').append(paragraph);
    
});

/* Task 4b using jQuery */
function changeBG(event){
    var color=event.target.innerText.toLocaleLowerCase();
    $('body').css('background-color',color);
}

/* Task 4c using jQuery */

$("#sum").click(function(event){
    var sum=Number($("#num1").val())+Number($("#num2").val());
    $('#result').text(sum);
});