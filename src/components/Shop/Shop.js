import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import Order from '../Order/Order';
import './Shop.css';

const Shop = () => {
    const [meals, setMeals] = useState([]);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
            .then(res => res.json())
            .then(data => setMeals(data.meals));
    }, []);

    const handleOrder = (meal) => {
        let newOrders = [...orders, meal];
        setOrders(newOrders);
    }

    return (
        <div className='shop-container'>
            <div className='meal-container'>
                {
                    meals.map(meal => <Meal meal={meal} key={meal.idMeal} handleOrder={handleOrder}></Meal>)
                }
            </div>

            <div className='order-details-container'>
                <h2>Order Details</h2>
                {
                    orders.map(order => <Order key={order.idMeal} order={order}></Order>)
                }
            </div>
        </div>
    );
};

export default Shop;