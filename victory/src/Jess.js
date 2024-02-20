import React, { useState } from 'react'
import './CSS/Mart.css'

function Jess({products}) {
    const[quantity,setquantity]=useState(products)
   
    const[cart,setcart]=useState(0)
       const[Amount,setAmount]=useState(0)
       const[item,setitem]=useState([])









   const addQuantity=(i)=>{
    const copy=[...quantity]
    copy[i].quantity++
    setquantity(copy)
    /* setting TotalAmount */
    let newAmount=Amount
    newAmount+=copy[i].price
    setAmount(newAmount)
        /* setting totalCart Items */
     let cartItems=cart
     cartItems=copy[0].quantity+copy[1].quantity+copy[2].quantity+copy[3].quantity+copy[4].quantity+
     copy[5].quantity+copy[6].quantity+copy[7].quantity+copy[8].quantity+copy[9].quantity+copy[10].quantity+
     copy[11].quantity+copy[12].quantity+copy[13].quantity+copy[14].quantity+copy[15].quantity+copy[16].quantity+
     copy[17].quantity+copy[18].quantity+copy[19].quantity
     

     setcart(cartItems)

     /* adding new item */
   /*   let newitem=item
  newitem+=copy[i].image
  setitem(newitem)
  console.log(item); */
    }

    const removeQuantity=(i)=>{
        const copy=[...quantity]
        if(copy[i].quantity>0){
            copy[i].quantity--
             setquantity(copy)
           /* setting TotalAmount */
             let newAmount=Amount
             newAmount-=copy[i].price
             setAmount(newAmount)

             /* setting cartItems here.. */
             let cartItems=cart
     cartItems=copy[0].quantity+copy[1].quantity+copy[2].quantity+copy[3].quantity+copy[4].quantity+
     copy[5].quantity+copy[6].quantity+copy[7].quantity+copy[8].quantity+copy[9].quantity+copy[10].quantity+
     copy[11].quantity+copy[12].quantity+copy[13].quantity+copy[14].quantity+copy[15].quantity+copy[16].quantity+
     copy[17].quantity+copy[18].quantity+copy[19].quantity

     setcart(cartItems)

     /*(new project) getting pic and details here.. */
     let newitem=item
     newitem+=copy[i].image
     setitem(newitem)
        }
       }
        

 
     const reset=()=>{
    const copy=[...quantity]
    copy.map((zeroprice)=>{
        return zeroprice.quantity=0
    })
     console.log(quantity)
    setquantity(copy)
        setAmount(0)
        setcart(0)
     }

     /* const cartItems=(i)=>{
        let copy=[...quantity]
        let  totalquantity=quantitysum
        totalquantity+=copy[i].quantity
        setquantitysum(totalquantity)
        console.log(quantitysum)
     } */

  return (
    <>
   <div id='new'>
   <h1>Abhi  <span id="mrt"> Mart</span></h1>
   </div>
    <button className='btn btn-primary amt2'>Total Amount: $ {Amount}</button>
    <button id="cart" className='btn btn-warning'>Cart-Items {cart}</button>
    
    
     {
        products.map((val,i)=>{
            return <div keys={i} className='row'>
            <div className='col-md-5 ms-5 mt-4'>
                <figure>
                    <img src={val.image} alt={val.id} className='img-fluid'/>
                    <figcaption>
                        
                        <div id='old'>
                        <h3><span>$</span>{val.price}</h3>
                        </div>
                        <h4>{val.title}</h4>
                    </figcaption>
                </figure>
            </div>
           <div className='col-md-3'>
           <div class="btn-group" role="group" aria-label="Basic mixed styles example">
            <div className='group-buttons'>
            <button onClick={()=>{removeQuantity(i)}}  type="button" class="btn btn-danger me-2">REMOVE</button>
            <button type="button" class="btn btn-dark">{val.quantity}</button>
            <button onClick={()=>{addQuantity(i)}}  type="button" class="btn btn-primary ms-2">ADD</button>
            </div>

</div>
<div className='col-md-4'>
    <button className='btn btn-warning indiprice'>$ {val.price*val.quantity}</button>
</div>


           </div>

            </div>
        })
     }
    
    <div className='last mb-4 rem mt-5'>
    <button className='btn btn-primary amt'>Total Amount: $ {Amount}</button>
    <button id="reset" className='btn btn-success' onClick={reset}>Reset</button>
    </div>
    
    
     
    
    
    
    
    
    </>
  )
}

export default Jess