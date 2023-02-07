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

let WhyArr = [
    {fimg:'Terev.svg',for1h4:'Original coffee',for1p:'Aromatic aroma con panna, crema so coffee robust coffee barista, cafe,Shop latte cortado  '},
    {fimg:'Shape2.svg',for1h4:'Free shipping',for1p:'Aromatic aroma con panna, crema so coffee robust coffee barista, cafe,Shop latte cortado  '},
    {fimg:'Shape1.svg',for1h4:'Cancel anytime',for1p:'Aromatic aroma con panna, crema so coffee robust coffee barista, cafe,Shop latte cortado  '},
    {fimg:'Shape3.svg',for1h4:'Various coffe',for1p:'Aromatic aroma con panna, crema so coffee robust coffee barista, cafe,Shop latte cortado  '}
]
WhyArr.forEach(element => {
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
    Fi.appendChild(Fiimg)
    Fiimg.src = element.fimg
    

    let EsimDiv = document.createElement('div')
    For1.appendChild(EsimDiv)
    EsimDiv.setAttribute('class', 'esim-div')

    let For1h4 = document.createElement('h4')
    EsimDiv.appendChild(For1h4)
    For1h4.setAttribute('class', 'h4-for1')
    For1h4.innerText = element.for1h4

    let For1p = document.createElement('p')
    EsimDiv.appendChild(For1p)
    For1p.setAttribute('class', 'p-for1')
    For1p.innerText = element.for1p
});

