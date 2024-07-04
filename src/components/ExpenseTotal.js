import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
    const { expenses, Currency } = useContext(AppContext);

    // Use reduce function to get a total of all the costs, assigning this to a var and displaying the va in the JSX
    // Whenever the user adds an expense, this causes the state to update, which will cause all components connected to the context to re-render and update themselves with new values.
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    return (
        <div className='alert alert-primary'>
            <span className="h6">Total spend</span>
            <div className="input-group">
                <span className="input-group-text">{Currency}</span>
                <input
                    className="form-control"
                    readOnly
                    value={totalExpenses}
                ></input>
            </div>
        </div>
    );
};

export default ExpenseTotal;
