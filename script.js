document.getElementById('name-add').addEventListener('click', function(){
   const nameValue = document.getElementById('name-field').value;
   localStorage.setItem('name', nameValue);
})
document.getElementById('name-remove').addEventListener('click', function(){
   localStorage.removeItem('name');
})
document.getElementById('age-add').addEventListener('click', function(){
   const ageValue = document.getElementById('age-field').value;
   localStorage.setItem('age', ageValue);
})
document.getElementById('age-remove').addEventListener('click', function(){
   localStorage.removeItem('age');
})
document.getElementById('clear-LS').addEventListener('click', function(){
   localStorage.clear();
})