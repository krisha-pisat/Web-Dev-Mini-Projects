parentObj= document.getElementsByID("parent");
nameObj= document.getElementsByID("prod-name");
priceObj= document.getElementsByID("prod-price");
detailsObj= document.getElementsByID("prod-details");

products=[
    {
        name:"Car",
        Price:1500000 ,
        Details: "Vinatge Expensive Car"
    },
    {
        name:"Slime",
        Price:150 ,
        Details: "Fun to play with "
    },
    {
        name:"Sofa",
        Price:30000 ,
        Details: "Leather Sofa"
    }
]

function renderProduct()
{
    parentObj.innerHTML=''
    for(i=0;i<products.length;i++)
    {
        parentObj.innerHTML= `<div class="pdt-card">
        <div class=pdt-name> ${products[i].name} </div>
        <div class="pdt-price> ${products[i].price} </div>
        <div class="pdt-price> ${products[i].details} </div>
        </div>`
    }
}

renderProduct()

function addProduct()
{
    newProduct={name:nameObj.value, price:priceObj.value, details:detailsObj.value}
    products.push(newProduct)
    renderProduct()
}
