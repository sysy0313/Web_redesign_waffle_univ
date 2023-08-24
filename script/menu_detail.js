// menu_detail.js
// 영양정보
const cream = document.querySelector('.cream')
const topping = document.querySelector('.topping')
const view_cream = document.querySelector('.view_cream')
const view_topping = document.querySelector('.view_topping')
const close_cream = document.querySelector('.close_cream')
const close_topping = document.querySelector('.close_topping')
console.log(cream, topping, view_cream, view_topping, close_cream, close_topping)
// 초기 숨기기
cream.style.display = 'none'
topping.style.display = 'none'
// 보이기+숨기기
view_cream.addEventListener('click', function(e){
    e.preventDefault();
    cream.style.display = 'block'
})
close_cream.addEventListener('click', function(){
    cream.style.display = 'none'
})
view_topping.addEventListener('click', function(e){
    e.preventDefault();
    topping.style.display = 'block'
})
close_topping.addEventListener('click', function(){
    topping.style.display = 'none'
})