import './ExpenseDate.css'
const ExpenseDate = (prop) =>{
    console.log(prop)
    const day = prop.date.toLocaleString('en-US', {day: '2-digit'})
    const month = prop.date.toLocaleString('en-US', {month: 'long'})
    const year = prop.date.getFullYear()

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    )
}

export default ExpenseDate