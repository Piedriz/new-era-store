import React from 'react'
export const Product = ({ product,handleAddToCart }) => {

    return (
        <div className="Products-item">
            <img src={product.image} alt={product.title} />
            <div className="Product-item-info">
                <h2>{product.title}
                    <span> ${product.price}</span>
                </h2>
                <p>{product.decription}</p>
            </div>
            <button onClick={handleAddToCart(product)} type='button'>Comprar</button>
        </div>
    )
}
