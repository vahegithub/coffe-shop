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




fetch('https://api.sampleapis.com/coffee/hot')
.then(res => {
return res.json()
})
.then(data =>{
        data.map((element,index) =>{
        if(index <= 8){
           
            let blockDiv1 = document.createElement('div')
        cendiv2.appendChild(blockDiv1)
        blockDiv1.setAttribute('class', 'block-div1')
    
        let blImg = document.createElement('img')
        blockDiv1.appendChild(blImg)
        blImg.setAttribute('class', 'block-img')
        blImg.src = element.image
    
        let nam = document.createElement('h3')
        blockDiv1.appendChild(nam)
        nam.setAttribute('id', 'bh3')
        nam.innerText = element.title
    
        let pric = document.createElement('h4')
        blockDiv1.appendChild(pric)
        pric.setAttribute('id', 'bh4')
        pric.innerText = element.id 
        
    
        let Viwbut = document.createElement('button')
        blockDiv1.appendChild(Viwbut)
        Viwbut.setAttribute('class', 'view-but')
        Viwbut.setAttribute('onclick','button')
        Viwbut.innerText = 'View Product'

     
        Viwbut.addEventListener('click',NewPage)
        function NewPage(){
            window.location = "file:///home/david/Desktop/coffe-shop/page.html"
           
        }
     
        }
                
    })
  })

.catch(err =>{
    console.log(err)
})
























































  

// let Prod = new Request('https://api.sampleapis.com/coffee/hot')
