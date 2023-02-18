import React, { useEffect, useRef } from 'react';
import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Button } from 'react-bootstrap';
gsap.registerPlugin(ScrollTrigger)

function Projects() {
    const BoxProj = useRef(null);

    useEffect(() => {
        const Projects = BoxProj.current;
        gsap.from(Projects,{
            opacity: 0,
            y: -50,
            ease: 'ease-in',
            duration: 2, 
            stagger: 0.3,
                scrollTrigger:{
                    trigger: '#scrollspy4',
                    start: 'top 40%'
                }
        })
    },[])

    const styleProj = {
        height: '1000px', 
        width: '60%',

        '@media (minWidth: 768px)': {
            height: '100%'
        }
    }

    const styleProjHead = {
        height: 120,

        '@media (maxWidth: 768px)': {
            height: 0
        }
    }
    return (
        <>
            <div id='scrollspy4'>
            <div className='bg-dark d-flex' style={styleProjHead}>
                <div className='vr'> 
                </div>
            </div>

            <section className = 'bg-dark d-flex flex-row justify-content-center' >
                
                <div ref={BoxProj} className = 'd-flex flex-row gap-2 justify-content-center' style = {styleProj}> 
                    <div className="row row-cols-xl-3 g-4  row-cols-md-2 row-cols-sm-1">
                        
                        <div className="col">
                            <div className="card text-white bg-dark border-light mb-3">
                                    <img src="https://i.ibb.co/qFG7ts0/Captura2.png" className="card-img-top" alt="..."/>
                                <div className="card-body">

                                    <h5 className="card-title font-monospace">
                                        Llantapp
                                    </h5>

                                    <p className="card-text font-monospace">
                                        Dashboard system used to provide a new way
                                        to the recolection points to manage 
                                        their inventories about the used wheels in Bogota
                                    </p>
                                    <Button variant="outline-info" className = 'sm font-monospace' >
                                        Go project!
                                    </Button>
                                </div>

                                <div className="card-footer">
                                    <small className="text-muted font-monospace">
                                        React, Tailwind, APIRest
                                    </small>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card text-white bg-dark border-light mb-3">
                                    <img src="https://i.ibb.co/QH1qwMR/comingsoon.png" className="card-img-top" alt="..."/>
                                <div className="card-body">

                                    <h5 className="card-title font-monospace">
                                        Coming Soon..
                                    </h5>

                                    <p className="card-text font-monospace">
                                        Lorem Ipsum is simply dummy text of the printing and 
                                        typesetting industry. Lorem Ipsum has been the industry's 
                                        standard dummy text ever since the 1500s
                                    </p>
                                    <Button variant="outline-info" className = 'sm font-monospace' >
                                        Go project?
                                    </Button>
                                </div>

                                <div className="card-footer">
                                    <small className="text-muted font-monospace">
                                        Coming Soon..
                                    </small>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card text-white bg-dark border-light mb-3">
                                    <img src="https://i.ibb.co/QH1qwMR/comingsoon.png" className="card-img-top" alt="..."/>
                                <div className="card-body">

                                    <h5 className="card-title font-monospace">
                                        Coming Soon..
                                    </h5>

                                    <p className="card-text font-monospace">
                                        Lorem Ipsum is simply dummy text of the printing and 
                                        typesetting industry. Lorem Ipsum has been the industry's 
                                        standard dummy text ever since the 1500s
                                    </p>
                                    <Button variant="outline-info" className = 'sm font-monospace' >
                                        Go project?
                                    </Button>
                                </div>

                                <div className="card-footer">
                                    <small className="text-muted font-monospace">
                                        Coming Soon..
                                    </small>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section> 

            <div className='bg-dark d-flex' style={{ height: '300px' }}>
                <div className='vr'> 
                </div>
            </div>

        </div>
        </>
    );
}

export default Projects;
