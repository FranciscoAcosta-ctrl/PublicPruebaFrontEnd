import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import SingleOrder from "../SingleOrder/SingleOrder";
import searchImg from '../../assets/icons/buscar.png';
import "./Orders.scss";

const Orders = ({ orders }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOrders, setFilteredOrders] = useState(orders);
  
  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);

    const filtered = orders.filter((order) =>
      order.order_number.includes(searchValue)
    );
    setFilteredOrders(filtered);
  };

  return (
    <>
    <div className="orders">
    {Navbar()}
      <div className="search-input-container">
        <label className="icon-search" htmlFor='searchInput'>
          <img srcSet={searchImg} htmlFor='searchInput'/>
        </label>
        <input
        id="searchInput"
          type="text"
          placeholder="Search.."
          className="input-search"
          onChange={handleSearch}
        />
      </div>
      <div className="components-orders-single">
        {filteredOrders.map((value, index) => (
          <div key={value._id}>
            <SingleOrder order={value} />
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Orders;
