/* eslint-disable react/prop-types */
//expense-item__price fail kättesaadavaks väljaspool
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter.jsx";
import './Expenses.css'
import ExpenseItem from "./ExpenseItem.jsx";
import Card from "../UI/Card.jsx";

const Expenses = (props) => {
    // Kontrollime saabunud props-e, et näha, mis andmed komponendile jõuavad.
    const [filteredYear, setFilteredYear] = useState('2024');

    const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
      console.log(`Year data in Expenses.js: ${selectedYear}`);
    };
  
    return (
      <Card className="expenses">
        <ExpensesFilter 
        selectedYear={filteredYear} onChangeFilter={filterChangeHandler}/>
          <ExpenseItem data={props.expenses[0]}/>
          <ExpenseItem data={props.expenses[1]}/>
      </Card>
    )
  };
  
  export default Expenses;
