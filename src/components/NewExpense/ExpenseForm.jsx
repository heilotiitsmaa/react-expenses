import {useState} from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  const titleChangeHandler = (event) => {
  setEnteredTitle(event.target.value)
}
const priceChangeHandler = (event) => {
  setEnteredAmount(event.target.value)
}
const dateChangeHandler = (event) => {
  setEnteredDate(event.target.value)
}

  const submitHandler = (event) => {
    event.preventDefault()
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }
    props.onSaveExpenseData(expenseData)
  setEnteredTitle('')
  setEnteredAmount('')
  setEnteredDate('')

  props.onCancel();
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input 
          type="text"
          onChange={titleChangeHandler}
          value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input
          type="number"
          min="0.01"
          step="0.01"
          onChange={priceChangeHandler}
          value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
          type="date" 
          min="2024-11-12" 
          max="2026-01-31"
          onChange={dateChangeHandler}
          value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type='button' onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm;