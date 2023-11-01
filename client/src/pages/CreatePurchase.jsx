import React, { useRef } from 'react';
import  { useNavigate } from 'react-router-dom';

import './style.css';
import API from '../API';
import Navbar from '../components/Navbar';

const CreatePurchase = () => {
    let navigate = useNavigate();
    //const [color, setColor] = useState('#000');
    const canvasInput = useRef();

    /**
     * Method to handle the creation of a Pokemon on form submit.
     */
    const handleCreatePurchase = async (e) => {
        e.preventDefault();
        const req = e.target;
        const payload = {
            purchase: {
                name: req.name.value,
                amount: req.amount.value,
                type: req.amount.value,
                location: req.location.value,
                category: req.category.value,
                date: req.date.value,
                desc: req.desc.value,
                image: canvasInput.current.getSaveData(),
            }
        };
        await API.createPurchase(payload);
        navigate("/view");
    };

    return (
        <div>
            <Navbar />
            <form onSubmit={handleCreatePurchase} className="create-page">
                <div class="finance-form">
                    <h2>Log a Purchase</h2>
                    <div class="form-row">
                        <label for="name">Purchase Name</label>
                        <input id="name" name="name" required></input>
                    </div>
                    <div class="form-row">
                        <label for="desc">Purchase Amount</label>
                        <input type="number" id="desc" name="desc" required></input>
                    </div>
                    <div class="form-row">
                        <label for="type1">Purchase Type</label>
                        <select id="type1" name="type1">
                            <option>Cash</option>
                            <option>Credit</option>
                            <option>Debit</option>
                            <option>Check</option>
                            <option>Crypto</option>
                        </select>
                    </div>
                    <input type="submit" value="Submit"></input>
                </div>
            </form>
        </div>
    );
};

export default CreatePurchase;