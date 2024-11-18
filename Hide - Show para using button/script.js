const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const para1 = document.getElementById('para1');
const para2 = document.getElementById('para2');
const para = false;
btn1.addEventListener('click', function(){
    para1.style.display = 'block';
    const para = true;
});
btn2.addEventListener('click', function(){
    para2.style.display ='none';
});
