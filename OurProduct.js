let hr2 = document.createElement('hr')
main.append(hr2)

let ProductDiv = document.createElement('div')
main.appendChild(ProductDiv)
ProductDiv.setAttribute('class', 'div-prod')

let divCenter = document.createElement('div')
ProductDiv.appendChild(divCenter)
divCenter.setAttribute('class', 'div-cen')



let cendiv1 = document.createElement('div')
divCenter.appendChild(cendiv1)
cendiv1.setAttribute('class', 'cen-div1')


let cendiv2 = document.createElement('div')
divCenter.appendChild(cendiv2)
cendiv2.setAttribute('class', 'cen-div2')


let ph2 = document.createElement('h2')
cendiv1.appendChild(ph2)
ph2.setAttribute('id', 'ph2')
ph2.innerText = 'Our Products'


let h2p = document.createElement('p')
cendiv1.appendChild(h2p)
h2p.setAttribute('id', 'h2p')
h2p.innerText = 'See all Products'

let ProdObj = {
    bh3:['Almond love coffee','Billy goat breakfast','Daniel love coffee','Maria love latte','John love nescafe','Anna like cake'],
    bh4:['14.50 $','16.00 $','20.00 $','15.00 $','18.00 $','19.50 $']

}
let ProdOb = [
    {price:'14.50$',name:'Almond love coffee'},
    {price:'16.00$',name:'Billy goat breakfast'},
    {price:'20.00$',name:'Daniel love coffee'},
    {price:'16.50$',name:'Maria love latte'},
    {price:'19.50$',name:'John love nescafe'},
    {price:'15.00$',name:'Anna like cake'}


]

for (let i = 0; i < 6; i++) {
    let blockDiv1 = document.createElement('div')
    cendiv2.appendChild(blockDiv1)
    blockDiv1.setAttribute('class', 'block-div1')

    let blImg = document.createElement('img')
    blockDiv1.appendChild(blImg)
    blImg.src = 'Img.svg'
    blImg.setAttribute('class', 'block-img')

    let nam = document.createElement('h3')
    blockDiv1.appendChild(nam)
    nam.setAttribute('id', 'bh3')
    // nam.innerText = 'Gago Love Coffee'
    nam.innerText = ProdOb.forEach(element => {
        return element.name
        // console.log(element.name)

    });

    let pric = document.createElement('h4')
    blockDiv1.appendChild(pric)
    pric.setAttribute('id', 'bh4')
    // price.innerText = '$14.50'
    pric.innerText = ProdOb.forEach(element => {
        return element.price
        // console.log(element.name)

    });

    let Viwbut = document.createElement('button')
    blockDiv1.appendChild(Viwbut)
    Viwbut.setAttribute('class', 'view-but')
    Viwbut.innerText = 'View Product'
}