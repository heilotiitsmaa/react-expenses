import './App.css';
import ExpenseItem from './components/ExpenseItem';
const App = () => {
  const expenses = [
    {
    date: new Date(2025, 1, 23),
    title: 'Sokolaadi jäätisekokteil',
    price: 2.75
  },
  {
    date: new Date(2025, 2, 16),
    title: 'Maasika jäätisekokteil',
    price: 3.29
  },
  {
    date: new Date(2025, 7, 7),
    title: 'Banaanijäätisekokteil',
    price: 1.95
  }
  ]
  return (
    <div className="App">
      <ExpenseItem data={expenses[0]}/>
      <ExpenseItem data={expenses[1]}/>
    </div>
  );
}

export default App;