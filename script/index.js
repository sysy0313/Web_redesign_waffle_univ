const visual_slide = new Swiper('#visual_slide',{
    autoplay:{
        delay:10000,
        disableOnInteraction:false,//버튼 클릭 후 자동재생유지
    }, //자동재생
    loop:true, //마지막슬라이드->첫슬라이드 자연스럽게
    effect:'fade',// effect:'fade', //제자리 자연스러운 변경 슬라이드 효과
});
const best_slide = new Swiper('#best_slide',{
    autoplay:{
        delay:20000,
        disableOnInteraction:false,//버튼 클릭 후 자동재생유지
    }, //자동재생
    loop:true, //마지막슬라이드->첫슬라이드 자연스럽게
    direction:'horizontal',
    // effect:'fade', //제자리 자연스러운 변경 슬라이드 효과
    navigation: { //이전, 다음 네이게이션 연결
        // next, prev 객체 연결 시 부모를 안 적으면
        // body 안에 있는 모든 swiper-next,prev를 인식하기 때문에
        // 개별인식 가능한 부모이름을 반드시 앞에 먼저 작성한다.
        nextEl: '#best_slide .swiper-button-next',
        prevEl: '#best_slide .swiper-button-prev',
    }
})