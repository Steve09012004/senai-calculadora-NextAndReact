"use client";
import React, { useState, useEffect } from "react";
import HamburguerMenu from "./hamburguerMenu";

export default function AsideMenu() {
    
    const [isOpen, setIsOpen] = useState(false);
    
    useEffect(() => {
        function handleResize() {
            const main = document.getElementsByTagName("main")[0];

            if (window.innerWidth >= 768) {
                // Tela grande → Mantém o aside aberto
                setIsOpen(true);
                main.style.opacity = "1";
                main.style.width = "calc(100vw - 290px)";
                main.style.marginLeft = "290px";
                main.style.pointerEvents = "fill";
            } else {
                // Tela pequena → Esconde aside
                setIsOpen(false);
                main.style.opacity = "1";
                main.style.width = "100vw";
                main.style.marginLeft = "0";
            }
        }

        // Executa uma vez quando carrega
        handleResize();

        // Adiciona o listener
        window.addEventListener("resize", handleResize);

        // Remove o listener quando desmonta
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    function showAsideMenu() {

        const main = document.getElementsByTagName("main")[0];

        if (isOpen) {
            // Fechar menu
            setIsOpen(false);
            main.style.opacity = "1";
            main.style.width = "100vw";
            main.style.marginLeft = "0";
            
        } else {
            // Abrir menu
            setIsOpen(true);
            main.style.pointerEvents = "none"; // Desabilita eventos no main
            main.style.opacity = "0.2";
            main.style.width = "calc(100vw - 290px)";
            main.style.marginLeft = "290px";
        }
    }

    return (
        <>
            {!isOpen && (
                <HamburguerMenu onClick={showAsideMenu} />
            )}
            <aside style={{ marginLeft: isOpen ? "0" : "-19em" }} className="aside-menu">
                <div className="logo">
                    <img src="/images/calculadora.png" alt="Logo" />
                    <div className="logo-text">
                        <h2>Calculadora</h2>
                        <p>Powered Estevão</p>
                    </div>
                </div>
                <div className="nav-container">
                    <div className="nav-box">
                        <div className="nav-title">Navegação</div>
                        <ul className="nav-list">
                            <li>
                                <a href="/"><span className="material-symbols-outlined">
                                    cottage
                                </span><span>Início</span></a>
                            </li>
                            <li>
                                <a href="/calculadora"><span className="material-symbols-outlined">
                                    calculate
                                </span><span>Calculadora</span></a>
                            </li>
                            <li>
                                <a href="/sobre"><span className="material-symbols-outlined">
                                    info
                                </span><span>Sobre</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="closePanel">
                    <span onClick={showAsideMenu} className="closeAside material-symbols-outlined">
                        left_panel_close
                    </span>
                </div>
            </aside>
        </>
    );
}