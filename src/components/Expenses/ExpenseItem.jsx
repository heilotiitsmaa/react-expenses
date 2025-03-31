import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card.jsx'
import {useState} from 'react';
const ExpenseItem = (prop) => {
    const [title, setTitle] = useState(prop.expenseData.title) //title uueneb kogu aeg
console.log(prop);
//const clickHandler = () => {
    //console.log('Pressed it!')
    //setTitle(`Updated by click ${prop.data.title}`) //title jääb samaks
    //console.log(title)
//}

return (
    <li>
    <Card className='expense-item'>
        <ExpenseDate date={prop.expenseData.date}/>
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>{prop.expenseData.amount}

            </div>
        </div>
    </Card>
</li>
  )
}

export default ExpenseItem //fail kättesaadavaks väljaspool