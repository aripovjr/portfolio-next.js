import React from "react";
import classes from "./Intro.module.css";

function Intro() {
  return (
    <div className={classes.introPartOne}>
      <div>
        <h2 className={classes.h2}>Hey there! It's me.</h2>
        <h1 className={classes.h1}>Jasurbek Aripov</h1>
        <h2 className={classes.h2}>And I'm a Full-Stack Developer</h2>
      </div>
      <div className={classes.round}>
        <img className={classes.avatar} src="/portfolio_avatar.jpeg" />
      </div>
    </div>
  );
}

export default Intro;
