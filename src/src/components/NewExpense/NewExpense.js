import './NewExpense.css';
import ExpenseForm from './ExpenseForm.js'

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense();
    }

    return(
        <div className="new-expense">
            <ExpenseForm onSaveData={saveExpenseDataHandler} />
        </div>
    );
}

export default NewExpense;