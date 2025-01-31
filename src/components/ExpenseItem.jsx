import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
import Card from './Card.jsx'
const ExpenseItem = (prop) => {

console.log(prop)

return (
    <Card className="expense-item">
        <ExpenseDate date={prop.data.date}/>
        <div className='expense-item__description'>
            <h2>{prop.data.title}</h2>
            <div className='expense-item__price'>{prop.data.price}</div>
        </div>
    </Card>
  )
}

export default ExpenseItem //fail kättesaadavaks väljaspool