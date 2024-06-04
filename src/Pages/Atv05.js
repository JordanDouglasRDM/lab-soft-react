import React from 'react';
import './Atv05.css';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Atv05 = () => {
    const location = useLocation();

    // Helper function to determine if the path is active
    const isActive = (path) => location.pathname === path;

    return (
        <div className="">
            <div className="pb-5">
                <div className="mt-4 text-center">
                    <h2 className="text-center">Atividade 5</h2>
                    <p>Essa atividade é composta por diversos exercícios, você pode navegar entre eles sem sair desta página ;)</p>
                </div>
                <div className="main d-flex">
                    <div className="sidebar mt-4 ms-3" style={{width: '250px'}}>
                        <div className="list-group text-center">
                            <li className={`list-group-item ${isActive('/atv05/accordion') ? 'active' : ''}`}>
                                <Link to="/atv05/accordion" style={{display: 'block', textDecoration: "none"}}>
                                    Accordion
                                </Link>
                            </li>
                            <li className={`list-group-item ${isActive('/atv05/form1atv5') ? 'active' : ''}`}>
                                <Link to="/atv05/form1atv5" style={{display: 'block', textDecoration: "none"}}>
                                    Quiz
                                </Link>
                            </li>
                            <li className={`list-group-item ${isActive('/atv05/form2atv5') ? 'active' : ''}`}>
                                <Link to="/atv05/form2atv5" style={{display: 'block', textDecoration: "none"}}>
                                    Check-in
                                </Link>
                            </li>
                            <li className={`list-group-item ${isActive('/atv05/messenger') ? 'active' : ''}`}>
                                <Link to="/atv05/messenger" style={{display: 'block', textDecoration: "none"}}>
                                    Messenger
                                </Link>
                            </li>
                        </div>
                    </div>
                    <div className="card mt-4 w-100 p-3 border-secondary-subtle mx-lg-5">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Atv05;
