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
m_nav.addEventListener('click', function(e){
    e.preventDefault();
    m_nav_open.classList.toggle('show')
})
const m_menu = document.querySelectorAll('.m_gnb > li > a')
const m_sub = document.querySelectorAll('.m_gnb .sub')
console.log(m_menu, m_sub)
for(let i of m_sub){i.style.display = 'none'}
m_menu.forEach(function(target, index){
    target.addEventListener('click', function(e){
        e.preventDefault()
        for(let i of m_sub){i.style.display = 'none'}
        m_sub[index].style.display = 'block'
    })
})