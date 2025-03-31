/* eslint-disable react/prop-types */
//expense-item__price fail kättesaadavaks väljaspool
import { useState } from "react";
import './Expenses.css'
import Card from "../UI/Card.jsx";
import ExpenseItem from "./ExpenseItem.jsx";
import ExpensesFilter from "./ExpensesFilter.jsx";
import ExpensesList from "./ExpensesList.jsx";


const Expenses = (props) => {
    // Kontrollime saabunud props-e, et näha, mis andmed komponendile jõuavad.
    const [filteredYear, setFilteredYear] = useState('2024');

    const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
      console.log(`Year data in Expenses.js' ${selectedYear}`)
    }
  const filteredExpenses = props.expenses.filter((expense) =>{
    return new Date(expense.date).getFullYear().toString() === filteredYear
});

    console.log('Filtered Expenses:', filteredExpenses);

    return (
      <Card className="expenses">
        <ExpensesFilter selectedYear={filteredYear} onChangeFilter={filterChangeHandler}/>
       <ExpensesList expenses={filteredExpenses} />

      </Card>
    )
  };
  
  export default Expenses;
