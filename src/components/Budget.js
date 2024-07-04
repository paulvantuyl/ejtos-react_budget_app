import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses, Currency } = useContext(AppContext);

    const changeBudget = (val) => {
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);

        if (val < totalExpenses) {
            alert("You can't reduce the budget that's already allocated.");
        } else if (val > 20000) {
            alert("The budget can't exceed " + Currency + "20,000");
        } else {
            dispatch({
                type: 'SET_BUDGET',
                payload: val,
            })
        }
    }
    
    return (
        <div className="alert alert-secondary">
            <span className="h6">Budget {budget}</span>
            <div className="input-group">
                <span className="input-group-text">{Currency}</span>
                <input
                    type="number"
                    className="form-control"
                    step="250"
                    value={budget}
                    onChange={(event) => changeBudget(event.target.value)}
                ></input>
            </div>
        </div>
    );
};

export default Budget;
