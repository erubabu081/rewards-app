import React,{useEffect, useId, useState} from 'react';


const Rewards = () => {
  const mock = [
    {
      userId: 1,
      name: "Erubabu",
      purchases: [
        { orderid: 1, amount: 120, month: "Oct" },
        { orderid: 2, amount: 75, month: "Nov" },
        { orderid: 3, amount: 200, month: "Dec" }
      ]
    },
    {
      userId: 2,
      name: "Behera",
      purchases: [
        { orderid: 4, amount: 90, month: "Oct" },
        { orderid: 5, amount: 130, month: "Nov" },   
        { orderid: 6, amount: 130, month: "Dec" }   

      ]
    }
  ];

  const [customerData, setCustomerData] = useState(mock);
    useEffect(() => {
    setCustomerData(mock);
    }, []);
  const calculateTotal = (purchases) =>
    purchases.reduce((sum, p) => sum + (p.amount || 0), 0);

  const getMonths = (purchases) =>
    purchases.map((p) => p.month).join(', ');

  // Rewards: 2 pts per $1 over $100, plus 1 pt per $1 between $50 and $100
  
  

  return (
    <div className="rewards-container">
      <h1>Rewards Component</h1>
      <div className="table">
        <div className="row header">
          <div className="cell">Customer id</div>
          <div className="cell">Name</div>
          <div className="cell">Months</div>
          <div className="cell">Total</div>
          <div className="cell">Rewards</div>
        </div>

        {customerData.map((customer) => {
          const total = calculateTotal(customer.purchases);
          
          return (
            <div className="row" key={customer.userId}>
              <div className="cell">{customer.userId}</div>
              <div className="cell">{customer.name}</div>
              <div className="cell">{getMonths(customer.purchases)}</div>
              <div className="cell">${total.toFixed(2)}</div>
              <div className="cell">{"rewards"}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Rewards;