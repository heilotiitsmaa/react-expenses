import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card.jsx'
import {useState} from 'react';
const ExpenseItem = (prop) => {
    const [title, setTitle] = useState(prop.expenseData.title)

const clickHandler = () => {
    console.log('Pressed it!')
    setTitle(`Updated by click ${title}`)
    console.log(title)
}

return (
    <Card className="expense-item">
        <ExpenseDate date={prop.expenseData.date}/>
        <div className='expense-item__description'>
            <h2>{prop.expenseData.title}</h2>
            <h2>{title}</h2>
            <div className='expense-item__price'>{prop.expenseData.price}</div>
        </div>
        <button onClick={clickHandler}>Press here!</button>
    </Card>
  )
}

export default ExpenseItem //fail kättesaadavaks väljaspool