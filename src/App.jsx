import './App.css';
import React from 'react';
import Expenses from './components/Expenses/Expenses.jsx';
import NewExpense from './components/NewExpense/NewExpense.jsx';
import {useState} from 'react';

const DUMMY_EXPENSES = [
    {
    date: new Date(2025, 1, 23),
    title: 'Sokolaadi jäätisekokteil',
    amount: 2.75,
    id: 'id1'
  },
  {
    date: new Date(2025, 2, 16),
    title: 'Maasika jäätisekokteil',
    amounte: 3.29,
    id: 'id2'
  },
  {
    date: new Date(2025, 7, 7),
    title: 'Banaani jäätisekokteil',
    amount: 1.95,
    id: 'id3'
  }
  ]

  const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    //console.log('In App.js');
    //console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;