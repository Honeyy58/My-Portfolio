import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>Uber Clone</h3>
              <h4>Full-Stack Developer</h4>
              <p>
                 React.js, Node.js, MongoDB, Socket.io, Maps API, JWT
• Developed a full-stack ride-booking application with real-time location tracking and ride management.
• Implemented secure user and driver authentication and authorization workflows using JWT.
• Integrated Maps API for dynamic route visualization, geocoding, and location-based services.
• Built scalable REST APIs using Node.js and Express.js to handle seamless data communication.
• Managed application data using MongoDB and implemented real-time updates using Socket.io.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">React &amp; </div>
                <div className="what-tags">Workflow design</div>
                <div className="what-tags">Node.js</div>
                <div className="what-tags">MongoDB</div>
                <div className="what-tags">Socket.io</div>
                <div className="what-tags">Maps API</div>
                <div className="what-tags">JWT</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>Sudoku &amp; Games </h3>
              <h4>Python Developer</h4>
              <p>
               I have enigneeed an interactive Sudoku game and other games using Python. The Sudoku game features a user-friendly interface, allowing players to input numbers, check for errors, and receive hints. The game logic ensures that the Sudoku rules are enforced, providing a challenging yet enjoyable experience. Additionally, I have developed other engaging games that showcase my proficiency in Python programming and game development.
              </p>
              
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
          
                <div className="what-tags">Cloud &amp; infra</div>
                <div className="what-tags">Python</div>
                <div className="what-tags">Game development</div>
                <div className="what-tags">Problem solving</div>
                <div className="what-tags">Algorithm design</div>
                
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
