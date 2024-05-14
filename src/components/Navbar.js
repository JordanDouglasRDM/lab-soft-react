function Navbar() {




    return (
        <div className="Navbar">

            <nav className="navbar bg-secondary-subtle navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Fatec - Lab. Engenharia</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarScroll"
                            aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse ms-4" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
                            style="--bs-scroll-height: 100px;">
                            <li className="nav-item">
                                <a className="nav-link meuButtonHome fs-5 ms-2" aria-current="page"
                                   href="index.html">Home</a>
                            </li>
                            <li className="nav-item dropdown ms-4 meuDropDown">
                                <a className="nav-link dropdown-toggle fs-5" href="#" role="button"
                                   data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    Atividades
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="atividades/atv1/home1.html">Atividade 1</a>
                                    </li>
                                    <li><a className="dropdown-item" href="atividades/atv2/home2.html">Atividade 2</a>
                                    </li>
                                    <li><a className="dropdown-item" href="atividades/atv3/home3.html">Atividade 3</a>
                                    </li>
                                    <li><a className="dropdown-item" href="atividades/atv4/home4.html">Atividade 4</a>
                                    </li>
                                    <li><a className="dropdown-item" href="atividades/atv5/home5.html">Atividade 5</a>
                                    </li>
                                    <li><a className="dropdown-item" href="atividades/atv6/home6.html">Atividade 6</a>
                                    </li>
                                    <li><a className="dropdown-item" href="atividades/atv7/home7.html">Atividade 7</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-md-auto navbar-nav-scroll">
                            <li><a href="https://github.com/JordanDouglasRDM" target="_blank"
                                   className="nav-link col-lg-auto me-2"><i data-feather="github"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/jordan-douglas-rosa-de-melo/" target="_blank"
                                   className="nav-link col-lg-auto me-2"><i data-feather="linkedin"></i></a></li>
                            <li className="nav-item dropdown ms-4 meuDropDown2">
                                <a className="nav-link dropdown-toggle fs-5" href="#" role="button"
                                   data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    Temas
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li><a className="dropdown-item" onClick="alterarTema('light')">Light <i
                                        className="fa-regular fa-sun"></i></a></li>
                                    <li><a className="dropdown-item" onClick="alterarTema('dark')">Dark <i
                                        className="fa-solid fa-moon"></i></a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
}

export default Navbar;