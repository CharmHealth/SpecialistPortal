import React, { useState } from 'react';

const billsData = [
  { id: 1, title: 'Dr. Pragasam', amount: 100, date: '2023-10-10', paid: false },
  { id: 2, title: 'Dr. Kashi', amount: 200, date: '2023-10-15', paid: false },
  { id: 3, title: 'Dr. Srinivasan', amount: 300, date: '2023-10-20', paid: true },
  // Add more bill objects here with the 'date' and 'paid' properties
];

const DashboardBills = () => {
  const handlePayBill = (bill) => {
    // Add logic to handle bill payment here
    bill.paid = true;
  };

  return (
    <div className="bg-domino-gray p-4 rounded-2xl shadow-2xl">
      <h1 className="text-2xl font-semibold text-dark-purple mb-2">Bills</h1>
      <ul className="space-y-4">
        {billsData.map((bill) => (
          <li key={bill.id} className="flex justify-between items-center p-4 rounded-xl">
            <div>
              <p className="text-white font-semibold text-xl">
                {bill.title}
              </p>
              <p className="text-purple-300 font-bold">
                {bill.date}
              </p>
              {/* Add more bill details here if needed */}
            </div>
            {bill.paid ? (
              <span className="text-gray-300">${bill.amount} Paid</span>
            ) : (
              <button
                onClick={() => handlePayBill(bill)}
                className="bg-dark-purple text-black text-xl px-4 py-2 rounded-3xl hover:bg-purple-300 shadow-3xl"
              >
                
                Pay ${bill.amount}
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardBills;
