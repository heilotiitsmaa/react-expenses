import './App.css';
import Expenses from './components/Expenses';
const App = () => {
  const expenses = [
    {
    date: new Date(2025, 1, 23),
    title: 'Sokolaadi jäätisekokteil',
    price: 2.75,
    id: 1
  },
  {
    date: new Date(2025, 2, 16),
    title: 'Maasika jäätisekokteil',
    price: 3.29,
    id: 2
  },
  {
    date: new Date(2025, 7, 7),
    title: 'Banaanijäätisekokteil',
    price: 1.95,
    id: 3
  }
  ]
  return (
    <div className="App">
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;