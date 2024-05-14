import avatarMasc from '../assets/img/avatar_masc.jpg';
import './Atv02.css';

import avatarFem from '../assets/img/avatar_fem.jpg';
import reloadIcon from '../assets/img/reload-icon.png';
import {useEffect, useState} from "react";

function Atv02() {
    let [countMale, setCountMale] = useState(0);
    let [countFemale, setCountFemale] = useState(0);
    let [sumCount, setSumCount] = useState(0);

    useEffect(() => {
        setSumCount(countMale + countFemale);
    }, [countMale, countFemale]);

    const clearAll = () => {
        setCountMale(0);
        setCountFemale(0);
        setSumCount(0);
    }

    const incrementMale = () => {
        setCountMale(countMale + 1);
    }
    const decrementMale = () => {
        if (countMale > 0) {
            setCountMale(countMale - 1);
        }
    }
    const incrementFemale = () => {
        setCountFemale(countFemale + 1);
    }
    const decrementFemale = () => {
        if (countFemale > 0) {
            setCountFemale(countFemale - 1);
        }
    }


    return (
        <div className="Atv02 container">
            <div className="container text-center">
                <h2>Contador de Pessoas</h2>
                <p className="text-center mt-lg-4">Total</p>
                <div className="d-flex align-items-center justify-content-center mb-lg-5">
                    <button className="btn btn-secondary mx-4 px-4 text-light">{sumCount}</button>
                    <a onClick={clearAll}><img className="px-4 reload-icon" src={reloadIcon} alt="ícone de reload de página"/></a>
                </div>
            </div>
            <div className="d-flex align-items-center justify-content-around">
                <div className="card d-flex align-items-center w-25">
                    <img src={avatarMasc} className="card-img-top img-avatar rounded-circle mt-3"
                         alt="Avatar masculino"/>
                    <div className="card-body">
                        <h5 className="card-title text-center">Homens</h5>
                        <div className="d-flex">
                            <a className="btn btn-outline-danger" onClick={decrementMale}>-</a>
                            <a className="btn btn-primary mx-3">{countMale}</a>
                            <a className="btn btn-outline-success" onClick={incrementMale}>+</a>
                        </div>
                    </div>
                </div>
                <div className="card d-flex align-items-center w-25">
                    <img src={avatarFem} className="card-img-top img-avatar rounded-circle mt-3"
                         alt="Avatar masculino"/>
                    <div className="card-body">
                        <h5 className="card-title text-center">Mulheres</h5>
                        <div className="d-flex">
                            <a className="btn btn-outline-danger" onClick={decrementFemale}>-</a>
                            <a className="btn btn-primary mx-3">{countFemale}</a>
                            <a className="btn btn-outline-success" onClick={incrementFemale}>+</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Atv02;