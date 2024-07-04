import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './context/AppContext';

import Budget from './components/Budget';
import RemainingBudget from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import Currency from './components/Currency';

const App = () => {
    return (
        <AppProvider>
            <div className="container">
                <div className="row mt-3">
                    <div className="col">
                        <h1 className="h4">The Company's Budget Allocation</h1>
                    </div>
                    <div className="col-auto">
                        <Currency />
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col">
                        <Budget />
                    </div>

                    <div className="col">
                        <ExpenseTotal />
                    </div>

                    <div className="col">
                        <RemainingBudget />
                    </div>
                </div>

                <div className="mt-12">
                    <div className="row">
                        <div className="col-sm">
                            <ExpenseList />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm">
                            <AllocationForm />
                        </div>
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};

export default App;
