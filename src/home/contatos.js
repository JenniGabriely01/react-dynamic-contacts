import '../home/contatos.css';
import logo from './img/logoProjeto.png';
import imgConteudo from './img/imgConteudo.png';
import logoSenai from './img/logoSenai.png';
import iconecell from './img/cell.png';
import iconestreet from './img/street.png';
import iconecity from './img/city.png';
import dadosContatos from '../contatos.json';
import React, { useState, useEffect } from 'react';

function Contatos() {


    const [text, setText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const originalText = "Exploring the Universe React!";

    useEffect(() => {

        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const newIndex = prevIndex + 1;

                if (newIndex <= originalText.length) {
                    setText(originalText.slice(0, newIndex));

                } else {
                    clearInterval(intervalId);
                }

                return newIndex;
            });
        }, 100);

        return () => clearInterval(intervalId);
    }, [originalText]);

    return (
        <>

            <header>

                <ul>
                    <li style={{ boxShadow: '0 2px 0 0 currentColor' }} >Home</li>
                    <li>Services</li>
                    <li>
                        <img className="logo" src={logo} alt="Logo" />
                    </li>
                    <li>Contact</li>
                    <li>About</li>
                </ul>

            </header>


            <div className="conteudo1">

                <div className="text">

                    <h1 id="texth1" style={{ overflow: 'hidden', margin: 0, animation: 'type 2s steps(40, end)' }}>{text}</h1>

                    <hr></hr>
                    <p>Welcome to my journey through the vast <br></br> cosmos of web development with React!</p>
                </div>
                <div className="imgConteudo">
                    <img id="img1" src={imgConteudo} alt="img" />

                </div>

            </div>


            <div className="linhaDivisoria">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="116" viewBox="0 0 1433 116" fill="none">
                    <path d="M1 114C1 114 217.059 15.1905 457 42C641.113 62.5716 856.055 108.775 1041 98C1199.7 88.7535 1433 2 1433 2" stroke="white" strokeWidth="3" />
                </svg>
            </div>


            <div className="conteudo2">
                <div className="titulo">
                    <hr></hr>
                    <h2>Cards Contact</h2>
                    <hr></hr>
                </div>

                <div className="cards">
                    {dadosContatos.map((contato, index) => (
                        <div key={index} className="card">
                            <div className="top">
                                <div className="img-card">
                                    <img src={contato.picture.large} alt={`${contato.name.first}`} />
                                </div>
                            </div>
                            <div className="bottom">
                                <h2>{` ${contato.name.first} ${contato.name.last}`}</h2>
                                <div className="info">
                                    <div className="infos">
                                        <img src={iconecell} alt="icone1" />
                                        <h1>Cell: {contato.cell}</h1>
                                    </div>
                                    <div className="infos">
                                        <img src={iconestreet} alt="icone1" />
                                        <h1>Street: {contato.location.street}</h1>
                                    </div>
                                    <div className="infos">
                                        <img className="city" src={iconecity} alt="icone1" />
                                        <h1>City: {contato.location.city}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <div className="linhaDivisoria">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="116" viewBox="0 0 1433 116" fill="none">
                    <path d="M1 114C1 114 217.059 15.1905 457 42C641.113 62.5716 856.055 108.775 1041 98C1199.7 88.7535 1433 2 1433 2" stroke="white" strokeWidth="3" />
                </svg>
            </div>


            <footer>
                <div className="textFooter">

                    <div className="titulo">
                        <hr style={{ margin: '1.5%' }}></hr>
                        <h2>Trabalho React - SENAI COTIA</h2>
                        <hr style={{ margin: '1.5%' }}></hr>
                    </div>

                    <p>Professor - Samuel Luis Dos Santos</p>

                    <img src={logoSenai} alt="Logo" />


                </div>
            </footer>


        </>
    )
}

export default Contatos;