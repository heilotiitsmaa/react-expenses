/* eslint-disable react/prop-types */
//expense-item__price fail kättesaadavaks väljaspool
import ExpenseItem from "./ExpenseItem.jsx";
import './Expenses.css'
import Card from "./Card.jsx";

const Expenses = (props) => {
    // Kontrollime saabunud props-e, et näha, mis andmed komponendile jõuavad.
  
    return (
      <Card className="expenses">
          <ExpenseItem data={props.expenses[0]}/>
          <ExpenseItem data={props.expenses[2]}/>
      </Card>
    )
  };
  
  export default Expenses;
