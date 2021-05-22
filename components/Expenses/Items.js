import ExpenseItem from './ExpenseItem.js';
import Card from '../UI/Card.js';
import './Expenses.css';

// function Items(props){
//   let els = props.expenses;
//     return(
//       <Card className="expenses">
//       {allelementsIsh(els)}
//       </Card>
//     );
// }
//practice with arrow funtions
const Items = (props) => {
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
    <Card className="expenses">
    {allEl}
    </Card>
    );
}

export default Items;