import './App.css';
import React from 'react';
import Expenses from './components/Expenses/Expenses.jsx';
import NewExpense from './components/NewExpense/NewExpense.jsx';
const App = () => {
  const expenses = [
    {
    date: new Date(2025, 1, 23),
    title: 'Sokolaadi jäätisekokteil',
    price: 2.75,
    id: 1
  },
  {
    date: new Date(2025, 2, 16),
    title: 'Maasika jäätisekokteil',
    price: 3.29,
    id: 2
  },
  {
    date: new Date(2025, 7, 7),
    title: 'Banaani jäätisekokteil',
    price: 1.95,
    id: 3
  }
  ]
  const addExpenseHandler = (expense) => {
    console.log('In App.js')
    console.log(expense)
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;