import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem.js';
import Card from '../UI/Card.js';
import './Expenses.css';
import ExpensesFilter from './ExpenseFilter';


const Items = (props) => {
  const [filterYear, setFilteredYear] = useState('2020');

  //function to handle updating year data from year user picked
  const pickYearHandler = (choosenYear) => {
    setFilteredYear(choosenYear);
  }

  let els = props.expenses;
  var allEl = [];
  for(var i = 0; i < els.length; i++){
    let currentEl = els[i];
    allEl.push(
    <ExpenseItem
    title={currentEl.title}
    amount={currentEl.amount}
    date={currentEl.date}
  />);
  }


  return (
    <div>
      <ExpensesFilter selected={filterYear} onPickYear={pickYearHandler}/>
      <Card className="expenses">
        {allEl}
      </Card>
    </div>
    );
}

export default Items;