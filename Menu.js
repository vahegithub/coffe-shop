let header = document.createElement('header')
document.body.appendChild(header)

let div = document.createElement('div')
header.appendChild(div)
div.setAttribute('class', 'div-section')

let divFirst = document.createElement('div')
div.appendChild(divFirst)
divFirst.setAttribute('class', 'first-section')





let div1 = document.createElement('div')
divFirst.append(div1)
div1.setAttribute('class', 'div1-section')


let a1 = document.createElement('a')
div1.appendChild(a1)
a1.setAttribute('class', 'shape')

let img = document.createElement('img')
img.src = "Shape.svg"
a1.appendChild(img)
div1.append(a1)

let a2 = document.createElement('a')
div1.appendChild(a2)
a2.setAttribute('id', 'gag')
a2.innerText = 'Your  Logo'

let divShop = document.createElement('div')
divFirst.append(divShop)
divShop.setAttribute('class', 'div-shop')


// sarqel zangvatsi mej
let Shop = ['Menu','Rewards','Contact','Subscription']
Shop.forEach(element => {
    let a3 = document.createElement('a')
divShop.appendChild(a3)
a3.innerText = element
});


// let a4 = document.createElement('a')
// divShop.appendChild(a4)
// a4.innerText = 'Menu'

// let a5 = document.createElement('a')
// divShop.appendChild(a5)
// a5.innerText = 'Rewards'

// let a6 = document.createElement('a')
// divShop.appendChild(a6)
// a6.innerText = 'Contact'

// let a7 = document.createElement('a')
// divShop.appendChild(a7)
// a7.innerText = 'Subscription'

// sarqel zangvatsi mej

/////////////////////////////////////

let divLast = document.createElement('div')
div.appendChild(divLast)
divLast.setAttribute('class', 'last-section')

let divFind = document.createElement('div')
divLast.appendChild(divFind)
divFind.setAttribute('class', 'div-find')

let a8 = document.createElement('a')
divFind.appendChild(a8)
a8.setAttribute('class', 'hape')

let img1 = document.createElement('img')
img1.src = "hape.svg"
a8.appendChild(img1)


let a9 = document.createElement('a')
divFind.appendChild(a9)
a9.setAttribute('id', 'find')
a9.innerText = 'Find Store'

let a0 = document.createElement('a')
divFind.appendChild(a0)
a0.setAttribute('class', 'icon1')

let img2 = document.createElement('img')
img2.src = "Icon (1).svg"
a0.appendChild(img2)

let a = document.createElement('a')
divFind.appendChild(a)
a.setAttribute('class', 'icon2')

let img3 = document.createElement('img')
img3.src = "Icon (2).svg"
a.appendChild(img3)

let hr = document.createElement('hr')
header.append(hr)
hr.setAttribute('class', 'hr1')
