function Navbar() {

    let temaSalvo = localStorage.getItem('temaSelecionado');
    if (temaSalvo) {
        alterarTema(temaSalvo);
    }

    function alterarTema(tema) {
        localStorage.setItem('temaSelecionado', tema);
        let meuBody = document.querySelectorAll('.meuBody');
        meuBody.forEach((body) => {
            body.setAttribute('data-bs-theme', tema);
        });
    }

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
                        >
                            <li className="nav-item">
                                <a className="nav-link meuButtonHome fs-5 ms-2" aria-current="page"
                                   href="/">Home</a>
                            </li>
                            <li className="nav-item dropdown ms-4 meuDropDown">
                                <a className="nav-link dropdown-toggle fs-5" href="#" role="button"
                                   data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    Atividades
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/atv01">Atividade 1</a>
                                    </li>
                                    <li><a className="dropdown-item" href="/atv02">Atividade 2</a>
                                    </li>
                                    <li><a className="dropdown-item" href="/atv03">Atividade 3</a>
                                    </li>
                                    <li><a className="dropdown-item" href="/atv04/bucketlist">Atividade 4</a>
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