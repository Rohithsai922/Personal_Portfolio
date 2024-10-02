import React from 'react'
import '../home/home.css'
import Cards from '../../components/Cards/cards'
import profile from '../../assets/profile_img.png'
import Footer from '../../components/Footer/Footer'
import html from "../../assets/html.png"
import css from "../../assets/css.png"
import js from "../../assets/js.png"
import react from "../../assets/react.png"
import php from '../../assets/php.png'
import cpp from '../../assets/cppbgless.png'
import c from '../../assets/c.png'
import mysql from '../../assets/mysql.png'
import resume from '../../assets/Nishitha_SDE.pdf'
import bus_booking_image from "../../assets/online_bus_booking_bg.webp"
import bakeryimage from "../../assets/bakery_bg.jpg"
import blog from "../../assets/blog.png"
import aboutimg from "../../assets/aboutimg.png"
import Timeline from '../../components/Timeline/Timeline'
import { Button } from 'antd'
import {motion} from 'framer-motion'
import { useState } from 'react'
import { Fade } from 'react-reveal';
import { AttentionSeeker } from 'react-awesome-reveal'

const Home = () => {
  const [isOpen1, setIsOpen1] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [isOpen3, setIsOpen3] = useState(false)
  const toggleIsOpen1 = () => {
    setIsOpen1(!isOpen1);
  };
  const toggleIsOpen2 = () => {
    setIsOpen2(!isOpen2);
  };
  const toggleIsOpen3 = () => {
    setIsOpen3(!isOpen3);
  };
  return (

    <div className='body'>
      
      
      <div className='hero-section'>
        
      <div class="blob">
      <img src={profile} alt="Profile" className='profileimg' />
      </div>
      <Fade>
      <div className="intro">
        <h1>Ch Nishitha</h1>

        <div class="typewriter">
        <h1>I am a <span className='typed'>Full Stack Developer </span>...</h1>

        </div>
        <h2>Computer Science Student</h2>
        <h2>Final Year at NIT SURAT </h2>
        <a href={resume} download="Nishitha_Resume">
        <Button id="resume">Resume</Button>
        </a>
      </div>
      </Fade>
      </div>
     
        
     <AttentionSeeker effect="pulse" >
      <center><h2 className='heading'>About</h2></center> 
      </AttentionSeeker>
      <div className="Aboutcontainer">
      
      <div id="About">
        
         <Fade>
          <h3>   
              I am deeply passionate about web development and competitive programming.
          </h3>
          <h3>
              From crafting interactive web applications to solving  algorithmic problems, I find joy in the process
               of creating and innovating.
          </h3>
          <h3>
               Over time, 
              I've honed my skills in front-end and back-end development, exploring various technologies and frameworks to bring my ideas to life.
          </h3>
          </Fade>
      </div>
      
      <Fade>
      <div id="Aboutimage">
        
        <img alt="about" src={aboutimg} />
      
      </div>
      </Fade>

      </div>




      <AttentionSeeker effect="pulse" >
        <div id="projects">
      <center><h2 className='heading'>Projects</h2></center> 
      </div>
      </AttentionSeeker>
     


    <div className='container'>
     
    
    <motion.div 
        layout 
        className='carde'
        
        style={{borderRadius: '1rem'}}
        transition={{duration: .5}}
      >
      <motion.div 
          className="card-top" 
          layout="position"
        >


     <Cards titlee="Online_Bus_Booking_Application"
            imagee={bus_booking_image}
           descriptionn="" 
           github="https://github.com/Nishu41/Online_bus_booking_application.git" 
           onClick={toggleIsOpen1}
           className="card"/>
           </motion.div>
           {isOpen1 && (
          <motion.div 
            className="card-content"
            initial={{clipPath: 'circle(0% at 0 0)'}}
            animate={{clipPath: 'circle(140.9% at 0 0)'}}
            transition={{duration: .5,delay: .25,type:'spring', damping:25,stiffness: 100}}
          >
            <p className='knowmore'>
              
            Created an online bus booking application that simplifies the process of reserving bus tickets, 
            featuring real-time availability, booking confirmations, and an intuitive interface. 
            The application enhances the travel booking experience with easy access to schedules and seat selection.







            </p>
            <p className='knowmore'>
              Tech Stacks : HTML,CSS, JS, MYSQL, PHP
                 
            </p>
          </motion.div>
        )}
      </motion.div>
      


    
      <motion.div 
        layout 
        className='carde'
        style={{borderRadius: '1rem'}}
        transition={{duration: .5}}
      >
      <motion.div 
          className="card-top" 
          layout="position"
        >     
     <Cards    titlee="A1_Bakery" 
            imagee={bakeryimage}
            descriptionn=""
            github="https://github.com/Nishu41/A1_Bakery-website.git" 
            onClick={toggleIsOpen2}
            className="card"/>
      </motion.div>
           {isOpen2 && (
          <motion.div 
            className="card-content"
            initial={{clipPath: 'circle(0% at 0 0)'}}
            animate={{clipPath: 'circle(140.9% at 0 0)'}}
            transition={{duration: .5,delay: .25,type:'spring', damping:25,stiffness: 100}}
          >
            <p className='knowmore'>
             
          In my first year, I participated in the Google Winter of Code Contest with a team of four. 
          Our project involved creating a frontend web application for a bakery,
         which included a feature to link orders to WhatsApp and various filters based on theme, cost, and rating. . 
         This experience significantly improved our team and time management skills.
            </p>
            <p className='knowmore'>
              Tech Stacks : HTML, CSS, JS .
            </p>
          </motion.div>
        )}
      </motion.div>
      
    
     
      <motion.div 
        layout 
        className='carde'
      
        style={{borderRadius: '1rem'}}
        transition={{duration: .5}}
      >
      <motion.div 
          className="card-top" 
          layout="position"
        >     
     <Cards titlee="Personal_Blog" 
           imagee={blog}
          descriptionn="" 
           github="https://github.com/Nishu41/Personal_Blog.git"
          onClick={toggleIsOpen3}
          className="card"/>
      </motion.div>
           {isOpen3 && (
          <motion.div 
            className="card-content"
            initial={{clipPath: 'circle(0% at 0 0)'}}
            animate={{clipPath: 'circle(140.9% at 0 0)'}}
            transition={{duration: .5,delay: .25,type:'spring', damping:25,stiffness: 100}}
          >
            <p className='knowmore'>
            This Blog web application boasts a range of exceptional features, 
            all geared towards enhancing user experience. 
            With robust user authentication, it enables users to explore blogs based on genres,
             popularity (most liked), and recency. Moreover, it offers the versatility to manage both personal
            and public blogs, 
            ensuring a seamless experience for all users.
            </p>
            <p className='knowmore'>
                 Tech Stacks : HTML, CSS, JS , React, NodeJS , MongoDB, ExpressJS .    
            </p>
          </motion.div>
        )}
      </motion.div>
      
     </div>

     <Timeline/>

     <div className='skill-container'>
      <AttentionSeeker effect='pulse'>
      <center><h2 className='heading'>Skills</h2></center>
      </AttentionSeeker>
      <Fade>
      <div className='first_set'>
      <img className='skill1' src={html} alt="html" />
      <img className='skill1' src={css} alt="css" />
      <img className='skill1' src={js} alt="js" />
      <img className='skill1' src={react} alt="react" />
      
      <img className='skill1' src={c} alt="c" />
      <img className='skill1' src={mysql} alt="mysql" />
      
      <img className='skill1' src={cpp} alt="cpp" />
      <img className='skill1' src={php} alt="php" />
      </div>
      <br />
      <br />
      </Fade>
     </div>




         
    <div id='contact'> 
     
     
    </div>
   
   
     
    
  
     <Footer/>
    </div>
  )
}

export default Home