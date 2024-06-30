import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    // Import useContext hook and pass AppContext to it
    // The component is using this to get values from global state
    // It is confusing that you would use Budget and budget constants though
    const { budget } = useContext(AppContext);

    // Use the useState hook to create a newBudget state variable and initialize it with the value of budget.
    const [newBudget, setNewBudget] = useState(budget);

    // This function updates the value of newBudget when the user changes the value of the input field.
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }
    // Set the value attr of the input field to newBudget and add an onChange event listener that calls handleBudgetChange when the user changes the value of the input field
    return (
        <div className = 'alert alert-secondary'>
            <span>Budget: £{budget}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;
