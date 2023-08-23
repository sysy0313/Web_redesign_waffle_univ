// slide
// slide01 - visual slide
const visual_slide = new Swiper('#visual_slide',{
    autoplay:{
        delay:5000,
        disableOnInteraction:false,//버튼 클릭 후 자동재생유지
    }, //자동재생
    loop:true, //마지막슬라이드->첫슬라이드 자연스럽게
    effect:'fade',// effect:'fade', //제자리 자연스러운 변경 슬라이드 효과
});
// slide02 - best_slide
const best_slide = new Swiper('#best_slide',{
    autoplay:{
        delay:7000,
        disableOnInteraction:false,//버튼 클릭 후 자동재생유지
    }, //자동재생
    loop:true, //마지막슬라이드->첫슬라이드 자연스럽게
    direction:'horizontal',
    // effect:'fade', //제자리 자연스러운 변경 슬라이드 효과
    navigation: { //이전, 다음 네이게이션 연결
        nextEl: '#best_slide .swiper-button-next',
        prevEl: '#best_slide .swiper-button-prev',
    }
})
// slide03_sns_slide
const sns_slide = new Swiper('#sns_slide', {
    autoplay:{
        delay:5000,
        disableOnInteraction:false,//버튼 클릭 후 자동재생유지
    }, //자동재생
    slidesPerView:4, //breakpoints 옵션 추가 시 'auto' 한번에 보이는 슬라이드 수
    spaceBetween:30,
    loop:true,
    // centeredSlides:true,
    //swiper-slide 반응형웹 옵션
    breakpoints:{
        //해상도:{옵션:값} 작은값->큰값
        280:{slidesPerView:1},
        500:{slidesPerView:2},//400이상일 때
        // 700:{slidesPerView:2}, //700이상일 때
        900:{slidesPerView:3}, //900이상일 때
        1160:{slidesPerView:4},//1160이상일 경우 슬라이드 4개 표시
    }
});
// tab------------------------
const tab_btn = document.querySelectorAll('.tab_btn')
const tab_con = document.querySelectorAll('.tab_con')
console.log(tab_btn, tab_con)
// 숨기기
tab_con[1].style.display = 'none'
tab_btn.forEach(function(target, index){
    target.addEventListener('click', function(e){
        e.preventDefault();
        for(let i of tab_con){i.style.display = 'none'}
        tab_con[index].style.display = 'flex'
        for(let i of tab_btn){i.classList.remove('active')};
        target.classList.add('active')
    })
})
// store 정보----------------------------
const store_img = document.querySelectorAll('.store a')
const store_span = document.querySelectorAll('.store a span')
console.log(store_img, store_span)
for(let i of store_span){i.style.opacity = '0'}
store_img.forEach(function(target, index){
    target.addEventListener('mouseover', function(){
        store_span[index].style.opacity = '1'
    })
    target.addEventListener('mouseout', function(){
        store_span[index].style.opacity = '0'
        store_span[index].style.transition = 'all 0.5s'
        
    })
})
// ----------------sns---------------------
const sns_con = document.querySelectorAll('.sns_con')
const sns_img = document.querySelectorAll('#sns_slide .swiper-wrapper .swiper-slide')
console.log(sns_con, sns_img)
for(let i of sns_con){i.style.opacity='0'}
sns_img.forEach(function(target, index){
    target.addEventListener('mouseover', function(){
        sns_con[index].style.opacity = '1'
    })
    target.addEventListener('mouseout', function(){
        sns_con[index].style.opacity = '0'
        sns_con[index].style.transition = 'all 0.5s'
    })
})

