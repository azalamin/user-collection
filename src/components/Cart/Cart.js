import React from 'react';
import './Cart.css';

const Cart = (props) => {
  const totalIncome = props.addUser.reduce((total, country) => total + country.income, 0);
   return (
      <div className="user-summary">
         <h2>Total User: {props.fakeData.length}</h2>
         <p>User added: {props.addUser.length}</p>
         <p>Yearly Income: {totalIncome}</p>
      </div>
   );
};

export default Cart;