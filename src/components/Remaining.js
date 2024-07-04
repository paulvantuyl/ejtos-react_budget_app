import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { expenses, budget, Currency } = useContext(AppContext);

    // Use the reduce function to get a total of all the costs, assigning this to a var and displaying the variable in the JSX

    // Whenever the user adds an expense, this causes the state to update, which causes all components connected to the context to re-render and update themselves with new values
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

    return (
        <div className={`alert ${alertType}`}>
            <span className="h6">Remaining budget</span>
            <div className="input-group">
                <span className="input-group-text">{Currency}</span>
                <input
                    className="form-control"
                    readOnly
                    value={budget - totalExpenses}
                ></input>
            </div>
        </div>
    );
};

export default Remaining;
