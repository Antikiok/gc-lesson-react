import React from 'react';
import Transaction from './Transaction.jsx';

const TransactionsList = props => {
  const transationList = props.transactions;
  console.log(props.transactions);
  return (
    <ul className="transactions">
      {transationList.map(transaction => (
        <Transaction key={transaction.id} {...transaction} />
      ))}
    </ul>
  );
};

export default TransactionsList;
