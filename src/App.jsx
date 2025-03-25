import {useState} from 'react';
import './App.css';
import React from 'react';
import Expenses from './components/Expenses/Expenses.jsx';
import NewExpense from './components/NewExpense/NewExpense.jsx';

const DUMMY_EXPENSES = [
    {
    id: 'id1',
    date: new Date(2023, 0, 19),
    title: 'Sokolaadi jäätisekokteil',
    amount: 2.75
  },
  {
    id: 'id2',
    date: new Date(2024, 0, 19),
    title: 'Maasika jäätisekokteil',
    amount: 3.29
  },
  {
    id: 'id3',
    date: new Date(2024, 0, 25),
    title: 'Banaani jäätisekokteil',
    amount: 11.95
  }
  ]

  const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expense) => {
    //console.log('In App.js')
    //console.log(expense)
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses]
    })
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;