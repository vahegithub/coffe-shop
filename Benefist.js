let Wdiv = document.createElement('div')
main.appendChild(Wdiv)
Wdiv.setAttribute('class', 'w-div')

let BuyDiv = document.createElement('div')
Wdiv.appendChild(BuyDiv)
BuyDiv.setAttribute('class', 'buy-div')

let OneDiv = document.createElement('div')
BuyDiv.appendChild(OneDiv)
OneDiv.setAttribute('class', 'one-div')

let Oneh4 = document.createElement('h4')
OneDiv.appendChild(Oneh4)
Oneh4.setAttribute('class', 'h4-one')
Oneh4.innerText = 'THE BENEFTS'

let Oneh2 = document.createElement('h2')
OneDiv.appendChild(Oneh2)
Oneh2.setAttribute('class', 'h2-one')
Oneh2.innerText = 'Why buy coffee from us'

let ForDiv = document.createElement('div')
BuyDiv.appendChild(ForDiv)
ForDiv.setAttribute('class', 'for-div')

for (let i = 0; i < 4; i++) {
    let For1 = document.createElement('div')
    ForDiv.appendChild(For1)
    For1.setAttribute('class', 'for1-div')

    let For1Div = document.createElement('div')
    For1.appendChild(For1Div)
    For1Div.setAttribute('class', 'div1-for1')

    
    let Fi = document.createElement('i')
    For1Div.appendChild(Fi)
    Fi.setAttribute('class', 'fa fa-icon-name')
    let Fiimg = document.createElement('img')
    Fiimg.setAttribute('class', 'img1-for')
    Fiimg.src = 'Terev.svg'
    Fi.appendChild(Fiimg)

    let EsimDiv = document.createElement('div')
    For1.appendChild(EsimDiv)
    EsimDiv.setAttribute('class', 'esim-div')

    let For1h4 = document.createElement('h4')
    EsimDiv.appendChild(For1h4)
    For1h4.setAttribute('class', 'h4-for1')
    For1h4.innerText = 'Original coffee'

    let For1p = document.createElement('p')
    EsimDiv.appendChild(For1p)
    For1p.setAttribute('class', 'p-for1')
    For1p.innerText = 'Aromatic aroma con panna, crema so coffee robust coffee barista, cafe,Shop latte cortado  '
}