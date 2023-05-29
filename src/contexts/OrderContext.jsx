import React, { createContext, useContext, useState } from 'react';

// Crea el contexto OrderContext
const OrderContext = createContext();

// Crea un componente proveedor del contexto
const OrderProvider = ({ children }) => {
  const [selectOrder, setSelectOrder] = useState(null);

  // Define las funciones o valores que deseas compartir en el contexto
  const updateOrder = (newOrder) => {
    setSelectOrder(newOrder);
  };

  const deleteOrder = () => {
    setSelectOrder(null);
  };
  // Envuelve los componentes hijos con el contexto
  return (
    <OrderContext.Provider value={{ selectOrder, updateOrder, deleteOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

// Crea un hook personalizado para acceder al contexto
const useOrderContext = () => useContext(OrderContext);

export { OrderProvider, useOrderContext };
