import React, { useEffect, useState } from "react";
import moment from "moment";
import truck from '../../assets/icons/camion.svg';
import trailer from '../../assets/icons/remolque.svg';
import location from '../../assets/icons/ubicacion.svg';
import eye from '../../assets/icons/eye.svg';
import BtnBrowseOnClick from "../BtnBrowseOnClick/BtnBrowseOnClick";
import './SingleOrder.scss';
import { useOrderContext } from "../../contexts/OrderContext";

const SingleOrder = ({ order }) => {

  const { updateOrder } = useOrderContext();


    function getTime(date) {
          
      const fechaInicio = new Date(date).toUTCString();
      const fechaFin = new Date().toUTCString();
      const esFecha1Mayor  =  fechaInicio > (fechaFin);
  
      return <>{esFecha1Mayor ? <></> : <BtnBrowseOnClick/>}</>
    }
  
    return (
      <>
        <p style={{color:'#828587'}}>
          Order <b style={{color:'#fff'}}>#{order.order_number}</b>
        </p>
        <div className="card">
          <div className="header-card">
            <div className="type-card"> 
            <img srcSet={truck} />
            <label>{order.type}</label></div>
            <div className="status-card">
              <div className={order.status_class}></div>
              
              <label>{order.status_string}</label>
            </div>
          </div>
          <div className="body-card">
            {order.destinations.map((value, index) => (
              <div className="route-body-card" key={index}>
                <div className="route-single">
                  <div className="icon-body-card">
                    {value.show_navigation ? <><img  srcSet={trailer} /> <div className="show-nav"></div></> : <img srcSet={location} />}
                  </div>
                  <div className="info-body-card">
                    <label className="nickname-info-card">{value.nickname}</label>
                    <label className="local-info-card">
                      Mexico{" "}
                      <div className="day-date-card">
                        {moment(value.start_date).format('DD/MM/YY')}
                      </div>
                    </label>
                    <label className="address-info-card">
                      <div className="adress-div">
                      <label>{value.address.substring(0, 30)}... </label>
                      </div>
                      <div className="time-date-card">
                        {moment(value.start_date).format("HH:mm")}
                      </div>
                    </label>
                  </div>
                </div>
                </div>
            ))}
          </div>
          <div className="buttons-card">
            <div className="pickup-buttons-card">{getTime(order.start_date)}</div>
            <div className="resp-buttons-card"><button onClick={(e) => updateOrder(order)}>Resumen <img srcSet={eye}/></button></div>
          </div>
        </div>
      </>
    );
  };

export default SingleOrder