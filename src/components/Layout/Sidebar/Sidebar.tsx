import * as React from 'react';
import Particles from 'react-particles-js';

const Sidebar = () => {

  const pConfig = {
    particles: {
      number: {
        value: 40,
        density: {
          enable: true,
          value_area: 300
        }
      },
      line_linked: {
        shadow: {
          enable: true,
          color: "#ffffff",
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onclick: {
          enable: true,
          mode: "push"
        }
      }
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <Particles 
        params={{
          particles: {
            color: {
              value: "#ffffff"
            },
            number: {
              value: 40,
              density: {
                enable: true,
                value_area: 300
              }
            },
            line_linked: {
              shadow: {
                enable: true,
                color: "#ffffff",
              },
              opacity: 0.4,
              color: "#ffffff"
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onclick: {
                enable: true,
                mode: "push"
              }
            }
          }
        }} 
        style={{position: "absolute", height: "100vh", top: "0", left: "0", zIndex: "0"}}
      />
      <a className="navbar-brand js-scroll-trigger" href="#page-top">
        <span className="d-block d-lg-none">My Portfolio</span>
        <span className="d-none d-lg-block">
          <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="assets/images/Profile-square.png" alt="" />
        </span>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#experience">Experience</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#education">Education</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#skills">Skills</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#interests">Interests</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#awards">Awards</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
