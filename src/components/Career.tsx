import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4> Study</h4>
                <h5>Python</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
Learning Python from fundamentals to advanced concepts, including OOP, file handling, APIs, and problem solving. Building hands-on projects to strengthen programming skills.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Mern-stack Developer</h4>
                <h5>Complete My Internship </h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Worked on real-world MERN Stack applications using React.js, Node.js, Express.js, and MongoDB. Developed responsive user interfaces, built REST APIs, integrated databases, fixed bugs, implemented new features, and collaborated with the team to deliver scalable web applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5> </h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Contributed to multiple web development projects, building full-stack applications from frontend to backend. Worked on authentication, API integration, database design, responsive UI, performance optimization, and deployment while following modern development practices.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4> starting face  </h4>
                <h5>Learning Full Stack Development</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Started my Full Stack Development journey by learning HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, Git, and GitHub. Built hands-on projects and strengthened problem-solving skills through continuous learning and practical implementation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
