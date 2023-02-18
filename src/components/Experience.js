import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Accordion.css'
import { Accordion } from 'react-bootstrap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

function Experience() {
    
    const BoxRef = useRef(null);
    useEffect(() => {
        const exp = BoxRef.current;
        gsap.from(exp,{
            opacity: 0,
            y: 50,
            ease: 'ease-in',
            duration: 2, 
            stagger: 0.3,
                scrollTrigger:{
                    trigger: '#scrollspy3',
                    start: 'top 20%'
                }
        })
    },[])

    return (
        <>
            <div id='scrollspy3'>
            <div className='bg-dark d-flex' style={{ height: 300 }}>
                <div className='vr'> 
                </div>
            </div>

            <section  className = 'bg-dark d-flex flex-row justify-content-center' id = ''>
                <div  ref = {BoxRef} className = 'd-flex flex-column' style = {{ height: '700px', width: '60%' }}> 
                    <div className = 'd-flex' style = {{width:'75%', paddingTop: '20px'}}>
                        <h3 className = 'text-warning font-monospace pl-10'>
                            Experience 
                        </h3>
                    </div>
                    
                    <Accordion  className = 'AccordionExp' defaultActiveKey="0">
                        <Accordion.Item eventKey="0" className = 'item'>

                                <Accordion.Header>
                                    SENNOVA - Investigation group 
                                </Accordion.Header>

                                <Accordion.Body className='bg-dark text-white' style = {{ paddingLeft: '5%', paddingRight: '5%', paddingTop: '3%'}}> 
                                    <h5 className = 'text-info font-monospace'>
                                        Front End Dev <span className = 'text-white'> @ SENA </span> 
                                    </h5>
                                        <h6 className = 'text-white font-monospace' style = {{ paddingLeft: '2%', marginBottom: '2%'}}>
                                            June - December 2022
                                        </h6>
                                    <ul className = 'd-flex flex-column gap-2'>
                                        <li className = "text-white" style={{fontFamily: 'monospace', fontSize: 14, listStyleType: "disc"}}>
                                            We optimized the code and redesigned the front end with React.js to make a more pleasant interface.
                                        </li>
                                        <li className = "text-white" style={{fontFamily: 'monospace', fontSize: 14, listStyleType: "disc"}}>
                                            Implemented APIS and WebSockets, so that users can login, register and view real time data inside the application
                                        </li>
                                    </ul>
                                </Accordion.Body>

                        </Accordion.Item>

                        <Accordion.Item eventKey="1" className = 'item'>

                                <Accordion.Header>
                                    SENA - Technologist in VideoGame Development
                                </Accordion.Header>

                                <Accordion.Body className='bg-dark text-white' style = {{ paddingLeft: '5%', paddingRight: '5%', paddingTop: '3%'}}> 
                                    <h5 className = 'text-info font-monospace'>
                                        Technologist <span className = 'text-white'> @ SENA </span> 
                                    </h5>
                                        <h6 className = 'text-white font-monospace' style = {{ paddingLeft: '2%', marginBottom: '2%'}}>
                                            April 2020 - December 2022
                                        </h6>
                                </Accordion.Body>

                        </Accordion.Item>

                        <Accordion.Item eventKey="2" className = 'item'>

                                <Accordion.Header>
                                    SENA - Software development technician
                                </Accordion.Header>

                                <Accordion.Body className='bg-dark text-white' style = {{ paddingLeft: '5%', paddingRight: '5%', paddingTop: '3%'}}> 
                                    <h5 className = 'text-info font-monospace'>
                                        Technician <span className = 'text-white'> @ SENA </span> 
                                    </h5>
                                        <h6 className = 'text-white font-monospace' style = {{ paddingLeft: '2%', marginBottom: '2%'}}>
                                            January 2017 - November 2018
                                        </h6>
                                </Accordion.Body>
                                
                        </Accordion.Item>
                    </Accordion>
                    
                </div>
            </section> 

            <div className='bg-dark d-flex' style={{ height: 250 }}>
                <div className='vr'> 
                </div>
            </div>

        </div>
        </>
    );
}

export default Experience;
