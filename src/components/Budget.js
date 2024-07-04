import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    // Import useContext hook and pass AppContext to it
    // The component is using this to get values from global state
    // It is confusing that you would use Budget and budget constants though
    const { budget, Currency } = useContext(AppContext);

    // Use the useState hook to create a newBudget state variable and initialize it with the value of budget.
    const [newBudget, setNewBudget] = useState(budget);

    // This function updates the value of newBudget when the user changes the value of the input field.
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);

        // dispatchEvent({
        //     type: 'SET_BUDGET',
        //     payload: event.id,
        // })
    };

    // Set the value attr of the input field to newBudget and add an onChange event listener that calls handleBudgetChange when the user changes the value of the input field
    return (
        <div className="alert alert-secondary">
            <span className="h6">Budget</span>
            <div className="input-group">
                <span className="input-group-text">{Currency}</span>
                <input
                    type="number"
                    className="form-control"
                    step="10"
                    value={newBudget}
                    onChange={handleBudgetChange}
                ></input>
            </div>
        </div>
    );
};

export default Budget;
