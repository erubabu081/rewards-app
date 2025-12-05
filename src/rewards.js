import React,{useEffect, useState} from 'react';


const Rewards = () => {
  const mock = [
    {
      userId: 1,
      name: "Erubabu",
      purchases: [
        { orderid: 1, amount: 0, month: "Oct" },
        { orderid: 2, amount: 0, month: "Nov" },
        { orderid: 3, amount: 120, month: "Dec" }
      ]
    },
    {
      userId: 2,
      name: "Behera",
      purchases: [
        { orderid: 4, amount: 120, month: "Oct" },
        { orderid: 5, amount: 0, month: "Nov" },   
        { orderid: 6, amount: 0, month: "Dec" }   

      ]
    }
  ];

  const [customerData, setCustomerData] = useState(mock);
    useEffect(() => {
    setCustomerData(mock);
    }, []);
  const calculateTotal = (purchases) =>
    purchases.reduce((sum, p) => sum + (p.amount), 0);

  const getMonths = (purchases) =>
    purchases.map((p) => p.month).join(', ');
  
  const calculateRewards = (purchases) =>
    purchases.reduce((points, purchase) => {
      const amt = purchase.amount || 0;
      if (amt > 100) {
         points = points + (amt - 100) * 2;
         points = points + 50;
        } else if (amt > 50) {
         points = points + (amt - 50) * 1;
        }
      return points;
    }, 0);

  return (
    <div className="rewards-container">
      <h1>Rewards calculator</h1>
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
          const rewards = calculateRewards(customer.purchases);
          return (
            <div className="row" key={customer.userId}>
              <div className="cell">{customer.userId}</div>
              <div className="cell">{customer.name}</div>
              <div className="cell">{getMonths(customer.purchases)}</div>
              <div className="cell">${total.toFixed(2)}</div>
              <div className="cell">{rewards}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Rewards;