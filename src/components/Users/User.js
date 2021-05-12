import React from 'react';
import './User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const User = (props) => {
   const {first, last, id, email, gender, address, image, country, phone, income} = props.user;
   return (
      <div className="user-container">
         <div className="single-user">
            <div className="image">
               <img src={image} alt="" width="80" />
            </div>
            <div>
               <h3>Name: {first} {last}</h3>
               <p>Address: {address}</p>
               <p>Email: {email}</p>
               <p>Gender: {gender}</p>
               <p>Country: {country}</p>
               <p>Phone: {phone}</p>
               <p>Income: ${income}</p>
               <button 
               onClick={() => props.handleAddUser(props.user)} 
               className="send-request">
                  <FontAwesomeIcon icon={faPlus} /> Send Request</button>
            </div>
         </div>
      </div>
   );
};

export default User;