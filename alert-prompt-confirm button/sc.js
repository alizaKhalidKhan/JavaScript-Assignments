const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
btn1.addEventListener('click', function(){
    alert('You clicked the button');
});
btn2.addEventListener('click', function(){
    prompt("Enter your secret:");
});
btn3.addEventListener('click', function(){
    confirm("Are you sure you want to confirm the secret?");
});