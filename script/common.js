// commin js (header, footer)
// sub메뉴
$('#gnb .sub').hide()
$('.sub_bg').hide()
$('#gnb').mouseover(function(){
    $('#gnb .sub').stop().slideDown()
    $('.sub_bg').stop().slideDown()
}).mouseout(function(){
    $('#gnb .sub').stop().slideUp()
    $('.sub_bg').stop().slideUp()
})
const gnb = document.querySelector('#gnb')
const header = document.querySelector('header')
const sub_bg = document.querySelector('.sub_bg')
console.log(gnb, header,sub_bg)
gnb.addEventListener('mouseover', function(){
    sub_bg.style.borderTop = '1px solid #efefef'
})
// m_nav
const m_nav = document.querySelector('.m_nav')
const m_nav_open = document.querySelector('.m_nav_open')
m_nav_open.style.display = 'none'
