import ExpenseDate from './ExpenseDate.js';
import Card from '../UI/Card.js';
import './ExpenseItem.css';

function ExpenseItem (props){

    //everything between the cards prop is the cards props.children
    return (
        <Card className='expense-item'>
           <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </Card>
    );
}
//the lack of parenthesis in clickHandler means the function is only run on click
//and not every time the jsx is rendered

export default ExpenseItem;
