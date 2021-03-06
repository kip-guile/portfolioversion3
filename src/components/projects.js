import React from "react";
import recipe from "../images/recipegen.png";
import tvguide from "../images/tvguide.png";
import portfolio from "../images/portfoliosite.png";
import personal from '../images/personal.png';

function Projects() {
  return (
    <>
      <div className="projects">
        <h1 id="projects">Projects & Code </h1>

        <div className="all-work">


        <div className="single-project">
            <div className="project-info">
              <h2>Personal Website</h2>
              <h3>Tools: HTML, LESS</h3>
              <img src={personal} alt="Personal Website Project" />
            </div>

            <div className="project-info description">
              Personal site built to showcase my online presence including my work in web development, writing, and content creation.
              <br />
              <h4>
              <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://jasheletillman.me/"
                >
                  Live Demo
                </a>
               
              </h4>

              <div className="category">
              <span className="category-span">Category:</span> Front End 
            </div>
            </div>

         

          
          </div>





          
          <div className="single-project">
            <div className="project-info">
              <h2>Portfolio Website</h2>
              <h3>Tools: React, LESS</h3>
              <img src={portfolio} alt="Project" />
            </div>

            <div className="project-info description">
            Portfolio site which mainly serves to display my latest projects & skills and is also utilized for professional networking with others in the software (or similar) fields including employers.
              <br />
              <h4>
                <a
                >
                  Live Demo
                </a>{" "}
                |{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/jasheloper/portfolioversion3"
                >
                  GitHub Code
                </a>
              </h4>

              <div className="category">
              <span className="category-span">Category:</span> Front End 
            </div>
            </div>

         

          
          </div>

          <div className="single-project">
            <div className="project-info">
              <h2>Recipe Generator</h2>
              <h3>Tools: React, Redux, Axios</h3>
              <img src={recipe} alt="Project" />
            </div>

            <div className="project-info description">
              This React app allows users to generate a random meal on button
              click. 3rd party API data was implemented using Axios and the
              selected data that users see on each request is:{" "}
              <code>title, photo, instructions, category,</code> and{" "}
              <code>area</code>.
              <h4>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://what-should-i-eat.netlify.com/"
                >
                  Live Demo
                </a>{" "}
                |{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/jasheloper/React-Redux-App/tree/jashele-tillman"
                >
                  GitHub Code
                </a>
              </h4>

              <div className="category">
              <span className="category-span">Category:</span> Front End 
            </div>
            </div>
          
          </div>

          <div className="single-project">
            <div className="project-info">
              <h2>TV Guide</h2>
              <h3>Tools: React, Class Components</h3>
              <img src={tvguide} alt="Project" />
            </div>

            <div className="project-info description">
              This React app allows users to see the latest episodes on
              television. The data is generated from a live 3rd party API and is
              automatically updated each day. Each request gets{" "}
              <code>image, overview, country, language,</code> and{" "}
              <code>vote average</code>.
              <h4>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://jasheletv.netlify.com/"
                >
                  Live Demo
                </a>{" "}
                |{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/jasheloper/jashele-tv"
                >
                  GitHub Code
                </a>
              </h4>
              <div className="category">
              <span className="category-span">Category:</span> Front End 
            </div>
            </div>
          </div>
       

           <div className="button-div">
            <button>More Coming Soon!</button>
          </div> 
        </div>
      </div>
    </>
  );
}

export default Projects;
