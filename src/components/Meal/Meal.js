import React from 'react';
import './Meal.css';

const Meal = ({ meal, handleOrder }) => {
    const { strMeal, strCategory, strMealThumb, strInstructions } = meal;
    return (
        <div className='card' onClick={() => handleOrder(meal)}>
            <img width='100%' style={{ borderRadius: '10px' }} src={strMealThumb} alt="" />
            <h4>{strMeal}</h4>
            <p>Category: {strCategory}</p>
            <p><small>{strInstructions.slice(0, 100) + '....'}</small></p>
        </div>
    );
};

export default Meal;