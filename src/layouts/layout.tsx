import React from 'react';
import Header from '../component/header';
import { Link, Outlet } from 'react-router-dom';
function layout() {
    return (
        <div>
            <div className="naba">
                <Header/>
            </div>
            <Outlet/>
        </div>
    );
}

export default layout;