import React, { useEffect, useRef } from 'react'
import backgroundDesktop from "../../assets/desktop-21.png";
import imgPerfil from '../../assets/img-perfil.jpeg';

import GP from '../../assets/proyectos/gestiones-pack-login.png';
import appCine from '../../assets/proyectos/app-cine.png';
import MFG from '../../assets/proyectos/portfolio-mf-gestiones.png';

import './HomeScreen.css';

export const HomeScreen = () => {



    useEffect(() => {

        const onScroll = () => {
            const titleElement: HTMLDivElement | null = document.querySelector('#title');
            titleElement && (titleElement.style.marginTop = `${window.scrollY * 1.5}px`)
            const imgElement: HTMLDivElement | null = document.querySelector('#img-frente');
            imgElement && (imgElement.style.marginTop = `-${window.scrollY * 0.5}px`)
        }

        document.addEventListener('scroll', onScroll)

        return () => {
            document.removeEventListener('scroll', onScroll);
        }
    }, [])


    return (
        <div className='body'>
            <header>
                <nav>
                    <h1>Portafolio</h1>
                    <span>
                        <a href="#">Inicio</a>
                        <a href="#about">Sobre mi</a>
                        <a href="#proyectos">Proyectos</a>
                        <a href="#skills">Skills</a>
                        <a href="#contacto">Contacto</a>
                    </span>
                </nav>
            </header>
            <section id='inicio'>
                <div style={{
                    backgroundColor: 'rgba(0,0,0,.4)',
                    width: '100%',
                    height: '100%',
                    position: 'absolute'
                }} />
                <div id='title'>
                    <img src={imgPerfil} alt="img-perfil" id='img-perfil' />
                    <h1>Amieva Abel</h1>
                    <h2>Full stack dev.</h2>
                </div>
                <img src={backgroundDesktop} alt="background2" id='img-frente' />
            </section>
            <div>

                <section className='container-section' id="about">
                    <h1>Sobre mi</h1>
                    <p>Hola, soy desarrollador junior con experiencia en React, NodeJS y React Native, más
                        específicamente en el stack MERN. También tengo práctica con Postgres. Tengo amplios
                        conocimientos en arquitectura limpia y sigo los principios SOLID para lograr desarrollos
                        mantenibles, escalables y testeables. Realizo pruebas unitarias y de integración con Jest.
                    </p>
                    <p>Tengo desarrollos de manera freelance para clientes propios, donde se me permitió empezar
                        de cero hasta hacer despliegues a producción, poniendo a prueba todos mis conocimientos,
                        aprendiendo a encontrar errores y buscar soluciones para poder seguir adelante.
                    </p>
                    <p>Actualmente me encuentro en la búsqueda de mi primera experiencia en relación de
                        dependencia como desarrollador. Soy una persona prolija, enfocada y detallista, con muchas
                        ganas de aprender y crecer en un equipo donde pueda aportar ideas valiosas y contribuir a
                        su crecimiento</p>

                </section>
                <section className='container-section' id="proyectos">
                    <h1>Proyectos</h1>
                    <div className='container-proyectos'>
                        <div className='container-proyectos-img1'>
                            <img src={GP} alt="login-gestiones-pack" />
                        </div>
                        <div className='container-proyectos-img2'>
                            <img src={appCine} alt="login-gestiones-pack" />
                            <img src={MFG} alt="login-gestiones-pack" />
                        </div>
                    </div>
                </section>
                <section className="container-section" id="skills">
                    <h1>Skills</h1>
                </section>
                <section className="container-section" id="contacto">
                    <h1>Contacto</h1>
                </section>
            </div>
        </div>
    )
}
