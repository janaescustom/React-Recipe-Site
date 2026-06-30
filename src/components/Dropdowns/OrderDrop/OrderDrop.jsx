// import React, { useState } from 'react'
import "./OrderDrop.css";

const OrderDrop = (category) => {
  return (
    <select id="filter">
      <option value="DEFAULT">Sort</option>
      <option value="A_TO_Z">A to Z</option>
      <option value="Z_TO_A">Z to A</option>
    </select>
  );
};

export default OrderDrop;
