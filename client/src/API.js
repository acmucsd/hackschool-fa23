import axios from 'axios';

const serverURL = 'https://hackschoolfa22-test-server.herokuapp.com';
// eslint-disable-next-line
export default {
    getPurchase: function() {
        return axios.get(`${serverURL}/api/financebuddy`);
    },

    createPurchase: function (payload) {
        const purchase = payload.purchase.filter(purchase => {
            return purchase.name && purchase.amount && purchase.type &&
                    purchase.location && purchase.category && purchase.date
                    && purchase.image;
        });
        const config = {
            method: 'post',
            url: `${serverURL}/api/financebuddy`,
            data: {
                name: payload.name,
                amount: payload.amount,
                type: payload.type,
                location: payload.location,
                category: payload.category,
                date: payload.date,
                description: payload.description,
                image: payload.image,
                purchase,
            }
        };
        return axios(config);
    }
}