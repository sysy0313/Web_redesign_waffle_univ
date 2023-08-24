const best_slide = new Swiper('#best_slide',{
    autoplay:{
        delay:2000,
        disableOnInteraction:false,//버튼 클릭 후 자동재생유지
    }, //자동재생
    loop:true, //마지막슬라이드->첫슬라이드 자연스럽게
    direction:'horizontal',
    // effect:'fade', //제자리 자연스러운 변경 슬라이드 효과
    slidesPerView:1,
    spaceBetween:30,
    speed:800,
    breakpoints:{
        //해상도:{옵션:값} 작은값->큰값
        430:{slidesPerView:2},//400이상일 때
        // 700:{slidesPerView:2}, //700이상일 때
        900:{slidesPerView:3}, //900이상일 때
        1160:{slidesPerView:4},//1160이상일 경우 슬라이드 4개 표시
        1600:{slidesPerView:5},//1160이상일 경우 슬라이드 4개 표시
    },
})
// tab
const tab_title = document.querySelectorAll('.tab_title a')
const tab_contents = document.querySelectorAll('.tab_contents')
for(let i of tab_contents){i.style.display = 'none'}
tab_contents[0].style.display = 'block'
console.log(tab_title, tab_contents)
tab_title.forEach(function(target, index){
    target.addEventListener('click', function(e){
        e.preventDefault();
        for(let i of tab_contents){i.style.display = 'none'}
        tab_contents[index].style.display = 'block'
        for(let i of tab_title){i.classList.remove('active')}
        target.classList.add('active')
    })
})