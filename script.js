const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0;

let int = setInterval(blurring, 30)

function blurring() {
    load++

    if (load > 99) {
        clearInterval(int)
    }

    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0) // Opaktan görünmezliğe gidiyoruz diye 1, 0 dedik, eğer görünmezden opağa gitseydik 0, 1 yapacaktık
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)` //0'dan 100'e yüklenmesiyle aynı süre içinde 30 piksel 0 piksele düşüyor bulanıklık gidiyor
}


// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }
