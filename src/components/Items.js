import ExpenseItem from './ExpenseItem.js';

function Items(props){
  let els = props.expenses;
    return(
      allelementsIsh(els)
    );
}

const allelementsIsh = els =>{
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
  return allEl;
}

export default Items;