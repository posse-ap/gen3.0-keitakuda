
document.getElementById('header-button').addEventListener("click",function(){
  document.getElementById('modalArea').classList.remove('modalNone')
  console.log('1')
});

document.getElementById('closeModal').addEventListener("click",function(){document.getElementById('modalArea').classList.add('modalNone')});



document.getElementById('modal-button').addEventListener('click',function(){
  document.getElementById('modalArea2').classList.remove('modalNone2');
  setTimeout(function(){document.getElementById('modalArea3').classList.remove('modalNone3')},5000)
});

document.getElementById('closeModal2').addEventListener("click",function(){document.getElementById('modalArea2').classList.add('modalNone2')});

document.getElementById('closeModal3').addEventListener('click',function(){
  document.getElementById('modalArea3').classList.add('modalNone3');
  document.getElementById('modalArea2').classList.add('modalNone2');
});