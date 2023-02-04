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


let FootArr = ['Shop','Our story','Products','Contact','Find Store','Press','Subscription']

FootArr.forEach(element => {
let l2 = document.createElement('a')
LastDiv.appendChild(l2)
l2.innerText = element
});

