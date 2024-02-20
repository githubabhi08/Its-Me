import React, { useState, useEffect, useRef } from 'react';
import './CSS/ProjectCounter.css';

const Counter = () => {
  const [projects, setProjects] = useState(0);
  const [experience, setExperience] = useState(0);
  const [rating, setRating] = useState(0);

  const profileRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Change this threshold as per your requirement
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Start counting animation only when the element is in view
          animateCounting();
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (profileRef.current) {
      observer.observe(profileRef.current);
    }

    const animateCounting = () => {
      const projectsInterval = setInterval(() => {
        setProjects(prevProjects => {
          const newProjects = prevProjects + 1;
          return newProjects >= 10 ? 10 : newProjects;
        });
      }, 100);

      const experienceInterval = setInterval(() => {
        setExperience(prevExperience => {
          const newExperience = prevExperience + 0.1;
          return newExperience >= 2.5 ? 2.5 : newExperience;
        });
      }, 100);

      const ratingInterval = setInterval(() => {
        setRating(prevRating => {
          const newRating = prevRating + 0.1;
          return newRating >= 7 ? 7 : newRating;
        });
      }, 100);

      return () => {
        clearInterval(projectsInterval);
        clearInterval(experienceInterval);
        clearInterval(ratingInterval);
      };
    };

    return () => observer.disconnect();
  }, []);

  return (
    <div className="profile-container" ref={profileRef}>
      <div>
        <h3>Number of Projects</h3>
        <h5>{projects.toFixed(0)}+</h5>
      </div>
      <div>
        <h3>Years of Experience</h3>
        <h5>{experience.toFixed(1)}+</h5>
      </div>
      <div>
        <h3>Average Rating</h3>
        <h5>{rating.toFixed(1)}</h5>
      </div>
    </div>
  );
};

export default Counter;