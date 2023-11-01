//import React, { useEffect, useRef } from 'react';
import './style.css';

const PurchaseCard = (props) => {

    return (
        <div className="purchase-card-container">
            <div className="purchase-card-container-inner">
                <div className="purchasecard-data-container">
                    <p className="purchasecard-name"> {props.name}</p>
                    <p className="purchasecard-amount"> {props.amount}</p>
                    <p className="purchasecard-location"> {props.location}</p>
                    <p className="purchasecard-category"> {props.category}</p>
                    <p className="purchasecard-date"> {props.date}</p>
                    <p className="purchase-description">{props.description}</p>
                    <p className="purchase-types">
                        <span className="purchase-type" >{props.type1}</span> {'\u00A0'}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PurchaseCard;