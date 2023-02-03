let main = document.createElement('main')
document.body.appendChild(main)

main.setAttribute('class', 'main-figma') 

let Frstdiv = document.createElement('div')
main.appendChild(Frstdiv)
Frstdiv.setAttribute('class', 'div-main')

let DivCentr = document.createElement('div')
Frstdiv.appendChild(DivCentr)
DivCentr.setAttribute('class', 'div-center')

let divImg1 = document.createElement('div')
DivCentr.appendChild(divImg1)
divImg1.setAttribute('class', 'div-img1')

let divImg2 = document.createElement('div')
DivCentr.appendChild(divImg2)
divImg2.setAttribute('class', 'div-img2')

let Bajak = document.createElement('img')
divImg1.appendChild(Bajak)
Bajak.src = 'coffee.svg'  

let h3 = document.createElement('h3')
divImg2.appendChild(h3)
h3.innerText = 'Server coffee for you on every morning'

let divp = document.createElement('p')
divImg2.appendChild(divp)
divp.innerText = 'Crema half and half, cappuccino coffee crema and medium wings. Aged espresso, java medium irish qui black'

let button = document.createElement('button')
divImg2.appendChild(button)
button.setAttribute('class', 'see-all')
button.innerText = 'See all Products >'
