import React, { useState } from 'react'
import productItem from './productItem'

const Product = () => {
    const [items, updateItems] = useState(productItem.slice());
    function handleRecommend(index) {
        let newItems = items.slice();
        newItems[index].showmain = !newItems[index].showmain;
        updateItems(newItems);
    }
    function handleClose(index) {
        let newItems = items.slice();
        newItems[index].showmain = !newItems[index].showmain;
        updateItems(newItems);
    }
    return (
        <div className="productItemContent">
            {items.map((item, index) => (
                <div className="productItem" key={item.id}>
                    {item.showmain ? (
                        <div className="productMain">
                            <img className="productImg" src={"/assets/img/" + item.img} />
                            <div className="productInfo">
                                <p className='productTitle'>
                                    {item.title}
                                </p>
                            </div>
                            <button className="productButton" onClick={() => handleRecommend(index)}>
                                Why I Recommend It?
                            </button>
                        </div>
                    ): (
                        <div className="productDetail">
                            <div className="productInfo">
                                <p className='productTitle'>
                                    {item.title}
                                </p>
                                <p className='productDescription'>
                                    {item.description}
                                </p>
                            </div>
                            <button className="productButton">
                                View Offer Now
                            </button>
                            <img 
                                className="productDetailClose" 
                                src="/assets/svg/close.svg"
                                onClick={() => handleClose(index)}
                            />
                        </div>
                    )}
                </div>
            ))}
        </div>);
    ;
}

export default Product