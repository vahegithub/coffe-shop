let Ask = document.createElement('div')
main.appendChild(Ask)
Ask.setAttribute('class','Ask')

let AskDiv = document.createElement('div')
Ask.appendChild(AskDiv)
AskDiv.setAttribute('class', 'ask-div')

let AskOne = document.createElement('div')
AskDiv.append(AskOne)
AskOne.setAttribute('class', ' ask-one')

let Askh1 = document.createElement('h1')
AskOne.append(Askh1)
Askh1.setAttribute('class', 'ask-h1')
Askh1.innerText = 'Friquently ask question '

let Askp = document.createElement('p')
AskOne.append(Askp)
Askp.setAttribute('class', 'ask-p')
Askp.innerText = 'Extra  steamed, as extra  java  milk beans single origin mazagran extraction barista'

let AskTwo = document.createElement('div')
AskDiv.append(AskTwo)
AskTwo.setAttribute('class', 'ask-two')

let Two1 = document.createElement('div')
AskTwo.append(Two1)
Two1.setAttribute('class', 'two-1')

let Two1div = document.createElement('div')
Two1.append(Two1div)
Two1div.setAttribute('class', 'two1-div')

let Two1h4 = document.createElement('span')
Two1div.append(Two1h4)
Two1h4.setAttribute('class', 'two1-h4')
Two1h4.innerText = 'What is the defference between Free & Paid ?'

let Two1img = document.createElement('img')
Two1div.append(Two1img)
Two1img.setAttribute('class', 'two1-img')
Two1img.src = 'chev.svg'

let Two1p = document.createElement('p')
Two1div.append(Two1p)
Two1p.setAttribute('class', 'two1-p')
Two1p.innerText = 'Robusta french press bar  cappuccino at medium single shot. Decaffeinated medium acerbic,  frappuccino and robust as caramelization arabica.'



for (let i = 0; i < 2; i++) {
    let Two3div = document.createElement('div')
    Two1.append(Two3div)
    Two3div.setAttribute('class', 'two3-div')

    let Two3h4 = document.createElement('span')
    Two3div.append(Two3h4)
    Two3h4.setAttribute('class', 'two3-h4')
    Two3h4.innerText = 'Why my coffee is not arrived until now ?'

    let Two3img = document.createElement('img')
    Two3div.append(Two3img)
    Two3img.setAttribute('class', 'two3-img')
    Two3img.src = 'chev.svg'
}

let Two2 = document.createElement('div')
AskTwo.append(Two2)
Two2.setAttribute('class', 'two2')

for (let i = 0; i < 3; i++) {
    let Two2div1 = document.createElement('div')
    Two2.append(Two2div1)
    Two2div1.setAttribute('class', 'two2-div1')

    let Two3h4 = document.createElement('span')
    Two2div1.append(Two3h4)
    Two3h4.setAttribute('class', 'two3-h4')
    Two3h4.innerText = 'Why my coffee is not arrived until now ?'

    let Two3img = document.createElement('img')
    Two2div1.append(Two3img)
    Two3img.setAttribute('class', 'two3-img')
    Two3img.src = 'chev.svg'
}

