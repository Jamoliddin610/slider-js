let imgs = document.getElementById('imgs');
let leftBtn = document.getElementById('left');
let rightBtn = document.getElementById('right');


let img = document.querySelectorAll('#imgs img');
img[0].style.transform = `scale(1)`

let idx = 0;

function changeImg() {
    img.forEach((item, ind) => {
        if (idx > img.length - 1) {
            idx = 0
        } else if (idx < 0) {
            idx = img.length - 1
        }
        imgs.style.transform = `translateX(${-idx * 550}px)`
        if (ind == idx) {
            item.style.transform = `scale(1)`
        } else {
            item.style.transform = `scale(0.7)`

        }
    })
}
for (let i = 0; i < img.length; i++) {
    img[i].addEventListener('click', () => {
        let num = 0;
        if (i > img.length - 1) {
            i = 0
        } else if (i < 0) {
            i = img.length - 1
        }
        imgs.style.transform = `translateX(${-i * 550}px)`
        img[i].style.transform = `scale(1)`
        img[i - 1].style.transform = `scale(0.7)`
        if (num <= i) {
            num = i
            idx++
        } else {
            num = i
            idx--
        }
    })


}

rightBtn.addEventListener('click', function change() {
    idx++;
    // resetInter();
    changeImg()

})
leftBtn.addEventListener('click', function change() {
    idx--;
    // resetInter();
    changeImg()

})






// let interval = setInterval(run, 2000);

// function run() {
//     idx++;

//     changeImg();
// }

// function resetInter() {
//     clearInterval(interval);

//      interval = setInterval(run, 2000);

// }