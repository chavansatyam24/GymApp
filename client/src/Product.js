import React from 'react'

const Product = () => {
    const 
    const paymentHandler = async (e)=>{
     const response = await fetch("http://localhost:5000/order",{
        method:"POST",
        body
     });
     
    
        
     

    }
  return (
    <>
    <div>
    <h3>BASIC</h3>
    <h2><span>9999/Year</span></h2>
    <button onClick={paymentHandler}>Pay</button>

    </div>

    <div>
   <h3>PRO</h3>
    <h2><span>12999/Year</span></h2>
    <button>Pay</button>

    </div>
    <div>
    <h3>PREMIUM</h3>
    <h2><span>15999/Year</span></h2>
    <button>Pay</button>
    </div>

   
      
    </>
  )
}

export default Product
