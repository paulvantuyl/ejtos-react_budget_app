import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import RemainingBudget from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
// import ExpenseItem from './components/ExpenseItem';
import AllocationForm from './components/AllocationForm';


const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                    {/* Budget component */}
                    <div className='col-sm'>
                        <Budget />
                    </div>

                    {/* Remaining component */}
                    <div className='col-sm'>
                        <RemainingBudget />
                    </div>

                    {/* ExpenseTotal component */}
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>
                </div>

                <div className='mt-12'>
                    <div className='row'>
                        {/* ExpenseList component */}
                        <div className='col-sm'>
                            <ExpenseList />
                        </div>

                        {/* ExpenseItem component */}
                        {/* <div className='col-sm'>
                            <ExpenseItem />
                        </div> */}
                    </div>

                    <div className='row'>
                        {/* AllocationForm component */}
                        <div className='col-sm'>
                            <AllocationForm />
                        </div>
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};
export default App;
