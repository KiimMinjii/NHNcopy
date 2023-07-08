// 메인 컨텐츠 슬라이드
var currentIndex = 0;

setInterval(function () {
    if (currentIndex < 2) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }

    $('.slideImg').eq(currentIndex).siblings().fadeOut(1000);
    $('.slideImg').eq(currentIndex).fadeIn(1000);
}, 4000);

// PRESS 자동 변경

// 메뉴 클릭시 색상 변화 on off 기능
