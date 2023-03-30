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
    let Griddiv1 = document.createElement('div')
FlexDiv.appendChild(Griddiv1)
Griddiv1.setAttribute('class', 'flex-div1')
let b = document.createElement('p')
Griddiv1.append(b)

if(i == 1){

    Griddiv1.style.gridColumn = '2/span 2'
}
    
}

