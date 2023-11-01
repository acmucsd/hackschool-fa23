import React, { useState, useEffect } from 'react';
import PurchaseCard from '../components/PurchaseCard';
import Navbar from '../components/Navbar';
import API from '../API';
import './style.css';


const ViewPurchase = () => {

    const [body, setBody] = useState([]);
    const [loading, setLoading] = useState(true);

    /* Loads the current list of pokemons */
    useEffect(() => {
       API.getPurchase()
       .then((response) => {
           setBody(response.data.pokemon);
           setLoading(false);
       })
    }, []);

    /* Renders the list of pokemon that matches the current filter */
    const currentPurchase = body.map((purchase, i) => {
        return (<PurchaseCard key={i} name={purchase.name} amount={purchase.amount} type={purchase.type} 
            location={purchase.location} category={purchase.category} date={purchase.date}
            description={purchase.description} image={purchase.image}/>);
    })

    /* Renders currentPokemons, or emptyList, depending on whether we returned pokemons */
    const listBody = () => {
        if(loading){
            return(
                <div className="purchase-empty-result">
                    <div className="purchase-empty-result-inner">
                        <p>Loading...</p>
                    </div>
                </div>
            );
        }
        return currentPurchase;
    }

    return (
        <div>
            <Navbar/>
            <h2 className="view-purchases-header">All Purchases</h2>
            <br />

            {listBody()}
        </div>
    );
}

export default ViewPurchase;