import React from "react";
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

const projectList = [
  {
    title: "E-commerce for lostronaunt",
    description:
      "solo project for an e-commerce website for a local vendor not yet deployed but almost ready to use.",
    url: "https://ecommerce-henna-iota.vercel.app/",
  },
  {
    title: "Payment Management application for local vendors",
    description:
      "Solo project done during internship to keep a track on orders for a Scrubber brand at initial stages.",
    url: "https://github.com/microsoft/web-dev-for-beginners",
  },
  {
    title: "My Portfolio Site",
    description:
      "Created on Next.js using certain component libraries and responsive design.",
    url: "https://aadeshkumar-portfolio.vercel.app/",
  },
  {
    title: "Django Website",
    description:
      "A basic Django website for deploying an app.",
    url: "https://aadeshkumar-portfolio.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          paddingTop: "3rem",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            maxWidth: "40%",
            alignSelf: "center",
            flex: "1 1 300px",
            margin: "0 auto",
          }}
        >
          <img
            src={image}
            style={{
              width: "100%",
              objectFit: "cover",
              borderRadius: "8px",
            }}
            alt={imageAltText}
          />
        </div>
        <div
          className="container"
          style={{
            flex: "1 1 500px",
            margin: "0 auto",
            padding: "1rem",
          }}
        >
          {projectList.map((project) => (
            <div className="box" key={project.title} style={{ marginBottom: "1.5rem" }}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
