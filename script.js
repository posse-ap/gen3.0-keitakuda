
document.getElementById('header-button').addEventListener("click",function(){
  document.getElementById('modalArea').classList.remove('modalNone')
  console.log('1')
});

document.getElementById('closeModal').addEventListener("click",function(){document.getElementById('modalArea').classList.add('modalNone')});



document.getElementById('modal-button').addEventListener('click',function(){
  document.getElementById('modalArea2').classList.remove('modalNone2')
});

document.getElementById('closeModal2').addEventListener("click",function(){document.getElementById('modalArea2').classList.add('modalNone2')})