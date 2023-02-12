let divInp = document.createElement('div')
main.appendChild(divInp)
divInp.setAttribute('class', 'div-inp')

let xdiv = document.createElement('div')
divInp.append(xdiv)
xdiv.setAttribute('class','xdiv')

let pInp = document.createElement('p')
xdiv.appendChild(pInp)
pInp.setAttribute('class', 'fechur')
pInp.innerText = 'Featured  on  :'

for(let i= 0;i < 4;i++){
    let inp1 = document.createElement('input')
xdiv.appendChild(inp1)
inp1.setAttribute('id', 'inp1')
if(i == 1 ){
    inp1.style.width = '240px'
}

}
