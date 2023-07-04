var currentIndex = 0;

setInterval(function () {
    if (currentIndex < 2) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }

    $('.slideImg').eq(currentIndex).siblings().fadeOut(1000);
    $('.slideImg').eq(currentIndex).fadeIn(1000);
}, 5000);
