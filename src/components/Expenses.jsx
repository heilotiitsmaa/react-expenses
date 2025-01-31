/* eslint-disable react/prop-types */
//expense-item__price fail kättesaadavaks väljaspool
import ExpenseItem from "./ExpenseItem.jsx";
import Card from "./Card.jsx";
import './Expenses.css'
const Expenses = (props) => {
    // Kontrollime saabunud props-e, et näha, mis andmed komponendile jõuavad.
  
    return (
      <Card className="expenses">
          <ExpenseItem data={props.expenses[0]}/>
          <ExpenseItem data={props.expenses[1]}/>
      </Card>
    )
  };
  
  export default Expenses;
