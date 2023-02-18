import React, { useEffect, useRef } from 'react';
import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

const Info = () => {

    const BoxInfo = useRef(null);
    const BoxPic = useRef(null);

    const styleP = {

        fontFamily: 'monospace',
        fontSize: 20, 
        color: 'white',
        margin: '5%',

        // Adding media query..
        '@media (minWidth: 768px)': {
            fontFamily: 'monospace',
            fontSize: 10, 
            color: 'white',
            margin: '5%',
        },
    };

    const styleDiv = {
        width: '60%',

        '@media (maxWidth: 992px)': {
            width: '100%'
        },

        '@media (maxWidth: 768px)': {
            width: '100%'
        }
    }

    const stylePic = {
        height: '100%',
        width: '40%',

        '@media (maxWidth: 992px)': {
            width: '100%'
        },

        '@media (maxWidth: 768px)': {
            width: '100%'
        }
    }



    useEffect(() => {
        const Info = BoxInfo.current;
        const Pic = BoxPic.current;

        gsap.from(Info,{
            opacity: 0,
            x: -50,
            ease: 'ease-in',
            duration: 2, 
            stagger: 0.3,
                scrollTrigger:{
                    trigger: '#scrollspy2',
                    start: 'top 20%',
                }
        })

        gsap.from(Pic,{
            opacity: 0,
            x: 50,
            ease: 'ease-in',
            duration: 2, 
            stagger: 0.3,
                scrollTrigger:{
                    trigger: '#scrollspy2',
                    start: 'top 20%',
                }
        })
    },[])

    return (
        <div id='scrollspy2'>
            <div className='bg-dark d-flex' style={{ height: 300 }}>
                <div className='vr'> 
                </div>
            </div>

            <section className = 'bg-dark d-flex flex-row justify-content-center' >

                        <div className = 'd-flex flex-xl-row flex-md-column flex-sm-column' style = {{ height: '100hv', width: '60%' }}>
                            
                            <div ref={BoxInfo} className = 'd-flex flex-column w-100' style = {styleDiv}> 
                        
                                <div className = 'd-flex flex-column justify-content-start align-items-center' style = {{ height: '90%', width: '100%'}}>
                                    <div className = 'd-flex' style = {{width:'100%', paddingLeft: '5%'}}>
                                        <h2 className = 'text-info font-monospace'>
                                            About Me
                                        </h2>
                                    </div>

                                    <p style = {styleP}>
                                        Hi, my name is Camilo!. I Enjoy building things that I can interact 
                                        and see on the internet. My interest in web development started a 
                                        few years ago when I discover that I can build interactive and useful pages, 
                                        not to mention that everybody can see it
                                        <br></br>
                                        <br></br>
                                        I also recently worked with SENA in a project that was made in React, Node and APIRest.
                                    </p>
                                </div>

                            <div className = 'd-flex flex-row justify-content-center align-items-center gap-5' style = {{ height: '10%', width: '100%', marginBottom: '5%'}}>
                                
                                <ul className="">
                                    <li className = "text-white" style={{listStyleType: "disc"}}>
                                        Javascript
                                    </li>
                                    <li className = "text-white" style={{listStyleType: "disc"}}>
                                        React
                                    </li>
                                </ul>

                                <ul className="">
                                    <li className = "text-white" style={{listStyleType: "disc"}}>
                                        Tailwind
                                    </li>
                                    <li className = "text-white" style={{listStyleType: "disc"}}>
                                        Bootstrap
                                    </li>
                                </ul>

                                <ul className="">
                                    <li className = "text-white" style={{listStyleType: "disc"}}>
                                        GSAP
                                    </li>
                                    <li className = "text-white" style={{listStyleType: "disc"}}>
                                        API Rest
                                    </li>
                                </ul>

                            </div>
                        </div>
                    

                    <div ref={BoxPic} className = 'd-flex flex-row justify-content-center align-items-center w-100' style = {stylePic}>
                        
                            <img src='https://i.ibb.co/tmH5sDk/reze.jpg' alt='me' style={{width: '60%'}}/>
                        
                    </div>
                </div>
            </section> 

            <div className='bg-dark d-flex' style={{ height: 250 }}>
                <div className='vr'> 
                </div>
            </div>

        </div>
    );
}

export default Info;