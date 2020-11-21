let carts=document.querySelectorAll('.addcart');
let products=[{
name:"JORWARNER" ,
image:"/ress/jacket2.jpg",
price:380,
quantity:1
},
{
    name:"AVIATOR" ,
    image:"/ress/jacket2.jpg",
    price:270,
    quantity:1
    },
    {
        name:"KILIAN" ,
        image:"/ress/jacket3.jpg",
        price:750,
        quantity:1
        },
        {
            name:"BEANDREW" ,
            image:"/ress/jacket4.jpg",
            price:650,
            quantity:1
            },
            {
                name:"AIRFORCE" ,
                image:"/ress/jacket5.jpg",
                price:350,
                quantity:1
                },
                {
                    name:"TAYLOR" ,
                    image:"/ress/jacket6.jpg",
                    price:1200,
                    quantity:1
                    }

];
for(let i=0;i<carts.length;i++){
    carts[i].addEventListener('click',()=>{additems(products[i])})
    carts[i].addEventListener('click',updatetotal);   



}

const shoppingCart=document.querySelector('#cartContent tbody');
    function additems(product){
        
        const row = document.createElement('tr');
           row.classList.add('jacket');
        row.innerHTML = `
    <tr>
        <td>
            <img src="${product.image}" width="100">    
        </td>
        <td>
            ${product.name}
        </td>
         <td>
         <form>
        <input class="itemNumbers" type="number"  min="1"  value="1" > 
        </form>
        </td>
        <td class='price'>
        ${product.price} DT
        </td>
        <td>
        <button type="button" class="btn btn-outline-danger">Remove</button>
        </td>
      
        </tr> 
      
    `
   ;
   
        shoppingCart.appendChild(row);


     
        var removeBut=document.getElementsByClassName('btn');
        for(let i=0;i<removeBut.length;i++){
           var button=removeBut[i];
           button.addEventListener('click',remove);
               
        }

        for(let i=0;i<quantityInputs.length;i++){
            var input=quantityInputs[i];
         input.addEventListener('change',quantityChanged);
     }

    }
function remove(event){
    var buttonClicked=event.target;
    buttonClicked.parentElement.parentElement.remove();
    updatetotal();
}


var quantityInputs=document.getElementsByClassName('itemNumbers');



function quantityChanged(event){
    var click=event.target;
    updatetotal();
}


function updatetotal() {
var cartContainer=document.getElementsByClassName('tr1')[0];

var cartRows=cartContainer.getElementsByClassName('jacket');
var total=0;
for(let i=0;i<cartRows.length;i++){
 var cartRow=cartRows[i];
 var priceItem=cartRow.querySelector('.price');
 var quantityItem=cartRow.querySelector('.itemNumbers');
 var price=parseFloat( priceItem.innerText.replace('DT',''));
 var quantity1=quantityItem.value;


  total=total+(price*quantity1);
}
total=Math.round(total*100)/100;
document.querySelector('.cart-total-price').innerText=total+' '+'DT';

}










