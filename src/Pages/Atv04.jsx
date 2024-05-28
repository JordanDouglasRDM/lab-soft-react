import React from 'react';
import './Atv04.css';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Atv04 = () => {
    const location = useLocation();

    // Helper function to determine if the path is active
    const isActive = (path) => location.pathname === path;

    return (
        <div className="">
            <div className="pb-5">
                <div className="mt-4 text-center">
                    <h2 className="text-center">Atividade 4</h2>
                    <p>Essa atividade é composta por diversos exercícios, você pode navegar entre eles sem sair da página ;)</p>
                </div>
                <div className="main d-flex">
                    <div className="sidebar mt-4 ms-3" style={{width: '250px'}}>
                        <div className="list-group text-center">
                            <li className={`list-group-item ${isActive('/atv04/bucketlist') ? 'active' : ''}`}>
                                <Link to="/atv04/bucketlist" style={{display: 'block', textDecoration: "none"}}>
                                    Bucket List
                                </Link>
                            </li>
                            <li className={`list-group-item ${isActive('/atv04/counter') ? 'active' : ''}`}>
                                <Link to="/atv04/counter" style={{display: 'block', textDecoration: "none"}}>
                                    Contador
                                </Link>
                            </li>
                            <li className={`list-group-item ${isActive('/atv04/counterlist') ? 'active' : ''}`}>
                                <Link to="/atv04/counterlist" style={{display: 'block', textDecoration: "none"}}>
                                    Lista de Contadores
                                </Link>
                            </li>
                            <li className={`list-group-item ${isActive('/atv04/form') ? 'active' : ''}`}>
                                <Link to="/atv04/form" style={{display: 'block', textDecoration: "none"}}>
                                    Formulário
                                </Link>
                            </li>
                            <li className={`list-group-item ${isActive('/atv04/form2') ? 'active' : ''}`}>
                                <Link to="/atv04/form2" style={{display: 'block', textDecoration: "none"}}>
                                    Formulário 2
                                </Link>
                            </li>
                            <li className={`list-group-item ${isActive('/atv04/form3') ? 'active' : ''}`}>
                                <Link to="/atv04/form3" style={{display: 'block', textDecoration: "none"}}>
                                    Formulário 3
                                </Link>
                            </li>
                            <li className={`list-group-item ${isActive('/atv04/gallery') ? 'active' : ''}`}>
                                <Link to="/atv04/gallery" style={{display: 'block', textDecoration: "none"}}>
                                    Galeria
                                </Link>
                            </li>
                            <li className={`list-group-item ${isActive('/atv04/list') ? 'active' : ''}`}>
                                <Link to="/atv04/list" style={{display: 'block', textDecoration: "none"}}>
                                    Lista
                                </Link>
                            </li>
                            <li className={`list-group-item ${isActive('/atv04/list2') ? 'active' : ''}`}>
                                <Link to="/atv04/list2" style={{display: 'block', textDecoration: "none"}}>
                                    Lista 2
                                </Link>
                            </li>
                            <li className={`list-group-item ${isActive('/atv04/list3') ? 'active' : ''}`}>
                                <Link to="/atv04/list3" style={{display: 'block', textDecoration: "none"}}>
                                    Lista 3
                                </Link>
                            </li>
                            <li className={`list-group-item ${isActive('/atv04/list4') ? 'active' : ''}`}>
                                <Link to="/atv04/list4" style={{display: 'block', textDecoration: "none"}}>
                                    Lista 4
                                </Link>
                            </li>
                            <li className={`list-group-item ${isActive('/atv04/movingdot') ? 'active' : ''}`}>
                                <Link to="/atv04/movingdot" style={{display: 'block', textDecoration: "none"}}>
                                    Ponto em Movimento
                                </Link>
                            </li>
                            <li className={`list-group-item ${isActive('/atv04/shapeeditor') ? 'active' : ''}`}>
                                <Link to="/atv04/shapeeditor" style={{display: 'block', textDecoration: "none"}}>
                                    Editor de Formas
                                </Link>
                            </li>
                            <li className={`list-group-item ${isActive('/atv04/toolbar') ? 'active' : ''}`}>
                                <Link to="/atv04/toolbar" style={{display: 'block', textDecoration: "none"}}>
                                    Barra de Ferramentas
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

export default Atv04;
