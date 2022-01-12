import React, { useState } from 'react'
import productItem from './productItem'

const Product = () => {
    return (
        <div className="productItemContent">
            {productItem.map((productItems) => (
                <div className="productItem" key={productItems.id}>
                    <img className="productImg" src={"assets/img/" + productItems.img} />
                    <div>
                    <p className='productTitle'>
                            {productItems.title}
                        </p>
                    </div>
                    <div className="productButton">
                        Why I Recommend It?
                    </div>
                </div>
            ))}
        </div>);
    ;
}

export default Product