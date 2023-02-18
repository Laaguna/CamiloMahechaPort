import React, { useEffect, useRef } from 'react';
import { MDBTypography } from 'mdb-react-ui-kit';
import {gsap} from 'gsap';

const AboutMe= () => {

    let timeline1 = gsap.timeline();
    useEffect(()=>{
        const Titulo = document.querySelectorAll(".Titulo");
            timeline1.from(Titulo, {
                opacity: 0, 
                duration: 1, 
                y: 50,
                stagger: 0.3,
                autoAlpha:0
            });
    },);

    const root = useRef();



    const one = 
        <MDBTypography tag='h6' className = 'Titulo' variant = 'text-info' style = {{fontFamily: 'monospace', fontSize: 18}}>  
            Hi, my name is
        </MDBTypography>;

    const two = 
        <MDBTypography tag='h2' className = 'Titulo' style = {{fontFamily: 'monospace', fontSize: 80, color: 'white'   }}>
            Camilo Mahecha.
        </MDBTypography>;

    const three = 
        <MDBTypography tag='h4' className = 'Titulo' variant = 'text-warning' style = {{fontFamily: 'monospace', fontSize: 30,  color: 'white'  }}>
            I like to build things for the web.
        </MDBTypography>;

    const four = (
        <MDBTypography className = 'Titulo' style = {{fontFamily: 'monospace', fontSize: 18, color: 'white' }}>
            I'm a younger web developer, that likes to build websites in React. 
            Currently, i'm focused on learning new technologies, to expand my knowledge.
        </MDBTypography>
        
    );
    const items = [one, two, three, four];

    return (
        <div id='scrollspy1'>
            <div ref ={ root } className='bg-dark d-flex' style={{ height: '300px' }}>
                <div className='vr'> </div>
            </div>

            <section className = 'bg-dark d-flex flex-column align-items-center justify-content-center'>
                
                    {items.map((item, i) => (
                            <div style = {{width: '65%'}} key={i}>
                                {item}
                            </div>
                    ))}

                    <div className = 'Titulo' style={{width: '65%'}}>
                        <div className = 'bg-dark d-flex flex-column align-items-start justify-content-center' >
                            <ul className = 'd-flex flex-row gap-4'>
                                <li className = "text-white" style={{fontFamily: 'monospace', fontSize: 22, listStyleType: "none"}}>
                                    ES6
                                </li>
                                <li className = "text-white" style={{fontFamily: 'monospace', fontSize: 22, listStyleType: "none"}}>
                                    REACT
                                </li>
                                <li className = "text-white" style={{fontFamily: 'monospace', fontSize: 22, listStyleType: "none"}}>
                                    TAILWIND
                                </li>
                            </ul>
                        </div>
                    </div>
            </section> 


            <div className='bg-dark d-flex' style={{ height: 385 }}>
                <div className='vr'> </div>
            </div>
        </div>
    );
}
export default AboutMe;