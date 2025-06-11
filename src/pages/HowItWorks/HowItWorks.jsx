import React from "react";
import classes from "./HowItWorks.module.css";
function HowItWorks() {
  return (
    <div className={classes.HowItWorks__container}>
      <h1>How it works</h1>
      <p>
        <FontAwesomeIcon icon="fa-solid fa-user-plus" /> Create an Account: Join
        our vibrant community of full stack developers with a quick sign-up!
      </p>
      <p>
        <FontAwesomeIcon icon="fa-regular fa-circle-question" /> Ask Questions:
        Have a question? Don’t hesitate! Our platform is your go-to for all
        things development.
      </p>
      <p>
        <FontAwesomeIcon icon="fa-regular fa-comments" /> Get Answers: Receive
        insightful responses from fellow community members and seasoned experts.
      </p>
      <p>
        <FontAwesomeIcon icon="fa-regular fa-brain" /> Share Knowledge: Give
        back by answering questions and helping others grow in their journey.
      </p>
    </div>
  );
}

export default HowItWorks;
