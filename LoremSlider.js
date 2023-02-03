let LoremDiv = document.createElement('div')
main.append(LoremDiv)
LoremDiv.setAttribute('class','LoremDiv')

//------------------------------------------------1-------------------------------------------------------//
let CenterLorem = document.createElement('div')
LoremDiv.append(CenterLorem)
CenterLorem.setAttribute('class', 'centr-lorem active')


let CirclDiv1 = document.createElement('div')
CenterLorem.append(CirclDiv1)
CirclDiv1.setAttribute('class', 'circl-div')

let LorDiv = document.createElement('div')
CenterLorem.append(LorDiv)
LorDiv.setAttribute('class', 'lorem-div')


let Lorp = document.createElement('p')
LorDiv.append(Lorp)
Lorp.setAttribute('class', 'lor-p')
Lorp.innerText = ' Robusta french press bar  cappuccino at medium single shot. Decaffeinated medium acerbic, id brewed steamed frappuccino and robust as caramelization arabica'

////---------------------------------------2------------------------------------------------------///

let CenterLorem2 = document.createElement('div')
LoremDiv.append(CenterLorem2)
CenterLorem2.setAttribute('class', 'centr2-lorem active')


let CirclDiv12 = document.createElement('div')
CenterLorem2.append(CirclDiv12)
CirclDiv12.setAttribute('class', 'circl-div2')

let LorDiv2 = document.createElement('div')
CenterLorem2.append(LorDiv2)
LorDiv2.setAttribute('class', 'lorem-div')


let Lorp2 = document.createElement('p')
LorDiv2.append(Lorp2)
Lorp2.setAttribute('class', 'lor-p')
Lorp2.innerText = '  french press bar  cappuccino at medium single shot. Decaffeinated medium acerbic, id brewed steamed frappuccino and robust as caramelization arabica'

////---------------------------------------------------------3-------------------------------------------/////

let CenterLorem3 = document.createElement('div')
LoremDiv.append(CenterLorem3)
CenterLorem3.setAttribute('class', 'centr3-lorem active ')


let CirclDiv13 = document.createElement('div')
CenterLorem3.append(CirclDiv13)
CirclDiv13.setAttribute('class', 'circl-div3')


let LorDiv3 = document.createElement('div')
CenterLorem3.append(LorDiv3)
LorDiv3.setAttribute('class', 'lorem-div')


let Lorp3 = document.createElement('p')
LorDiv3.append(Lorp3)
Lorp3.setAttribute('class', 'lor-p')
Lorp3.innerText = ' Robusta  press bar  cappuccino at medium single shot. Decaffeinated medium acerbic, id brewed steamed frappuccino and robust as caramelization arabica'


////  CREAT SLIDIER  ////////
let SlideDiv = document.createElement('div')
LoremDiv.appendChild(SlideDiv)
SlideDiv.setAttribute('class', 'slid-div')


let Sdiv1 = document.createElement('div')
SlideDiv.append(Sdiv1)
Sdiv1.setAttribute('class', 'slide active ')
Sdiv1.appendChild(CenterLorem)


let Sdiv2 = document.createElement('div')
SlideDiv.append(Sdiv2)
Sdiv2.setAttribute('class', 'slide')
Sdiv2.appendChild(CenterLorem2)


let Sdiv3 = document.createElement('div')
SlideDiv.append(Sdiv3)
Sdiv3.setAttribute('class', 'slide')
Sdiv3.appendChild(CenterLorem3)


let ButnDiv = document.createElement('div')
LoremDiv.appendChild(ButnDiv)
ButnDiv.setAttribute('class', 'navigat')


for (let i = 0; i < 3; i++) {
    let btns = document.createElement('button')
    ButnDiv.append(btns)
    btns.setAttribute('class', 'btn ')
}

/////////////////////////  code  //////////////////////////////////////
let slides = document.querySelectorAll('.slide')
let btns = document.querySelectorAll('.btn')
let currentslide = 1

let manualnav = function (manual) {
    slides.forEach((slide) => {
        slide.classList.remove('active')

        btns.forEach((btn) => {
            btn.classList.remove('active')
        })
    })

    slides[manual].classList.add('active')
    btns[manual].classList.add('active')
}
btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        manualnav(i)
        currentslide = i
    })
})