import React from "react";

export default function ChockCard(props) {
     const {chocklate , handleAddtocart } = props;
     const { title, image, price,cart } = props.chocklate;
    return(
            <div className="cart">
                <img src={image} alt="image1"/>
                <div className="title">{title}</div>
                <div className="price">Rs. {price}</div>
               <button onClick={()=>handleAddtocart(chocklate)} className={cart ? "Removecart" : "addtocart"}>
               {cart ? "Remove from Cart" : "Add to Cart"}
               </button>
            </div> 
    )
    
}