/* eslint-disable react/prop-types */
//expense-item__price fail kättesaadavaks väljaspool
import ExpenseItem from "./ExpenseItem.jsx";
import './Expenses.css'
const Expenses = ({expenses}) => {
    // Kontrollime saabunud props-e, et näha, mis andmed komponendile jõuavad.
  
    return (
      <div className="expenses">
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id} // Unikaalne võti iga elemendi jaoks.
            data={expense} // Saadame ExpenseItem-le ühe kulu objekti.
          />
        ))}
      </div>
    );
  };
  
  export default Expenses;
