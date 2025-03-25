/* eslint-disable react/prop-types */
//expense-item__price fail kättesaadavaks väljaspool
//import { useState } from "react";
import './Expenses.css'
import Card from "../UI/Card.jsx";
import ExpenseItem from "./ExpenseItem.jsx";
import ExpensesFilter from "./ExpensesFilter.jsx";


const Expenses = (props) => {
    // Kontrollime saabunud props-e, et näha, mis andmed komponendile jõuavad.
    //const [filteredYear, setFilteredYear] = useState('2024');
    const filterChangeHandler = (filteredYear) => {
      console.log('Year data in Expenses.js' + filteredYear)
    }
  
    return (
      <Card className="expenses">
        <ExpensesFilter onChangeFilter={filterChangeHandler}/>
        {
        props.expenses.map((expense) => {
          return <ExpenseItem expenseData={expense} key={expense.id}/>
        })
      }
      </Card>
    )
  };
  
  export default Expenses;
