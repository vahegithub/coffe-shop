let footer = document.createElement('footer')
main.append(footer)
footer.setAttribute('class', 'footer')

let footDiv = document.createElement('div')
footer.append(footDiv)
footDiv.setAttribute('class', 'foot-div')

let dontDiv = document.createElement('div')
footDiv.append(dontDiv)
dontDiv.setAttribute('class', 'dont-div')

let Donth2 = document.createElement('h2')
dontDiv.append(Donth2)
Donth2.setAttribute('class', 'dont-h2')
Donth2.innerText = 'Don`t wait too long '

let Dh2 = document.createElement('h2')
dontDiv.append(Dh2)
Dh2.setAttribute('class', 'dont-h2 b')
Dh2.innerText = ' for a special coffee everydays'

let divButn = document.createElement('div')
dontDiv.append(divButn)
divButn.setAttribute('class', 'sub-div')

let bacik = document.createElement('img')
divButn.append(bacik)
bacik.src = 'namak.svg'

let input = document.createElement('input')
divButn.append(input)
input.setAttribute('class', 'but-inp')
input.setAttribute('placeholder', ' Write your mail')

let FootButn = document.createElement('button')
divButn.append(FootButn)
FootButn.setAttribute('class', 'foot-butn')
FootButn.innerText = 'Subsribe Us'

let HR = document.createElement('hr')
footDiv.append(HR)
HR.setAttribute('id', 'hr')
HR.style.lineHeight = '50px'

let LastDiv = document.createElement('div')
footDiv.append(LastDiv)
LastDiv.setAttribute('class', 'last-div')


//  let Lastdiv2 = document.createElement('div')
//  LastDiv.appendChild(Lastdiv2)
//  div2.setAttribute('class' , 'last-div2')

let l2 = document.createElement('a')
LastDiv.appendChild(l2)
l2.innerText = 'Shop'

let l3 = document.createElement('a')
LastDiv.appendChild(l3)
l3.innerText = 'Our story'

let l4 = document.createElement('a')
LastDiv.appendChild(l4)
l4.innerText = 'Products'

let l5 = document.createElement('a')
LastDiv.appendChild(l5)
l5.innerText = 'Contact'

let l6 = document.createElement('a')
LastDiv.appendChild(l6)
l6.innerText = 'Find Store'

let l7 = document.createElement('a')
LastDiv.appendChild(l7)
l7.innerText = 'Press'

let l8 = document.createElement('a')
LastDiv.appendChild(l8)
l8.innerText = 'Subscription'