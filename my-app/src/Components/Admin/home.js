import React from 'react'
import Header from './Header/header';
import Dashboard from './Dashboard/dashboard';

export default function home() {
    return (
        <div>
            <div className="row">
                <div className="col-sm-3"> <Header /></div>
                <div className="col-sm-9"> <Dashboard /></div>
            </div>
        </div>
    )
}
