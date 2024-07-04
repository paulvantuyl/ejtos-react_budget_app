import React, { useContext } from 'react';
import { PlusCircleFill, DashCircleFill, XCircleFill } from 'react-bootstrap-icons';
import { AppContext } from '../context/AppContext';

// Dispatching an action that contains the type, so the reducer knows how to update the state and the payload
// Passing the ID of the expense, obtained from props when rendering the ExpenseList
const ExpenseItem = (props) => {
    const { dispatch, Currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });
    };

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense,
        });
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>{Currency}{props.cost}</td>
            <td>
                <PlusCircleFill 
                    color="#198754" 
                    size="1.5em"
                    onClick={(event) => increaseAllocation(props.name)}
                />
            </td>
            <td>
                <DashCircleFill
                    color="#ffc106"
                    size="1.5em"
                    onClick={(event) => decreaseAllocation(props.name)}
                />
            </td>
            <td>
                <XCircleFill
                    color="#dc3445"
                    size="1.5em"
                    onClick={handleDeleteExpense}
                />
            </td>
        </tr>
    );
};

export default ExpenseItem;
