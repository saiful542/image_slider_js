
const images=[
    'image/IMG_20201216_124950.jpg',
    'image/IMG_20201217_150032.jpg',
    'image/IMG_20201217_130859.jpg',
    'image/IMG_20201216_133137.jpg',
    'image/IMG_20201216_124913.jpg'
]

let i=0;
const img =document.getElementById('image')
setInterval(()=>{
    if(i>=images.length)
        i=0;
    img.setAttribute('src',images[i]);
    i++
},1500)