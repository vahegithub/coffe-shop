let GalerDiv = document.createElement('div')
main.appendChild(GalerDiv)
GalerDiv.setAttribute('class', 'galer-div')

let GalDiv = document.createElement('div')
GalerDiv.appendChild(GalDiv)
GalDiv.setAttribute('class', 'gal-cen')
1
let divOne = document.createElement('div')
GalDiv.appendChild(divOne)
divOne.setAttribute('class', 'div1-One')

let Galh5 = document.createElement('h5')
divOne.appendChild(Galh5)
Galh5.setAttribute('class', 'gal-h5')
Galh5.innerText = 'GALLERY'

let Galh1 = document.createElement('h1')
divOne.appendChild(Galh1)
Galh1.setAttribute('class', 'gal-h1')
Galh1.innerText = 'Featured Coffee Gallery'

let FlexDiv = document.createElement('div')
GalDiv.appendChild(FlexDiv)
FlexDiv.setAttribute('class', 'flex-div')
 
for(let i = 0;i < 5;i++){
    let Flexdiv1 = document.createElement('div')
FlexDiv.appendChild(Flexdiv1)
Flexdiv1.setAttribute('class', 'flex-div1')
let imgblok = document.createElement('img')
imgblok.src = 'Image.svg'
Flexdiv1.appendChild(imgblok)

if(i == 1){
    imgblok.src = 'Image2.svg'
}
    
}

// let Flexdiv2 = document.createElement('div')
// FlexDiv.appendChild(Flexdiv2)
// Flexdiv2.setAttribute('class', 'flex-div2')
// let imgbl2 = document.createElement('img')
// imgbl2.src = 'Image2.svg'
// Flexdiv2.appendChild(imgbl2)

// for (let i = 0; i < 3; i++) {
//     let Flexdiv3 = document.createElement('div')
//     FlexDiv.appendChild(Flexdiv3)
//     Flexdiv3.setAttribute('class', 'flex-div3')
//     let imgbl3 = document.createElement('img')
//     imgbl3.src = 'Image.svg'
//     Flexdiv3.appendChild(imgbl3)
// }