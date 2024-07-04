import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch } = useContext(AppContext);

    const changeCurrency = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        });
    }

    return (
        <div>
            <select
                className="form-select"
                aria-label="Change currency"
                id="Currency"
                onChange={event => changeCurrency(event.target.value)}
            >
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select>
        </div>
        
        // <div className="dropdown">
        //     <button
        //         className="btn btn-secondary dropdown-toggle"
        //         type="button"
        //         data-bs-toggle="dropdown"
        //         aria-expanded="false"
        //         id="Currency"
        //         onChange={event => changeCurrency(event.target.value)}
        //     >
        //         Currency ({Currency})
        //     </button>



        //     <ul className="dropdown-menu">
        //         <li>
        //             <a className="dropdown-item" value="$">
        //                 $ Dollar
        //             </a>
        //         </li>
        //         <li>
        //             <a className="dropdown-item" value="£">
        //                 £ Pound
        //             </a>
        //         </li>
        //         <li>
        //             <a className="dropdown-item" value="€">
        //                 € Euro
        //             </a>
        //         </li>
        //         <li>
        //             <a className="dropdown-item" value="₹">
        //                 ₹ Ruppee
        //             </a>
        //         </li>
        //     </ul>
        // </div>
    );
};

export default Currency;
