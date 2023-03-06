import React from "react";
import classes from "./../layout/Media.module.css";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import Link from "next/link";

function Media() {
  return (
    <div className={classes.mediaContainer}>
      <div className={classes.mediaLinks}>
        <Link target="_blank" href="https://github.com/aripovjr">
          <i>
            <BsGithub />
          </i>
        </Link>
        <Link target="_blank" href="https://linkedin.com/">
          <i>
            <BsLinkedin />
          </i>
        </Link>
        <Link target="_blank" href="https://twitter.com/aripovofficial">
          <i>
            <BsTwitter />
          </i>
        </Link>
        <Link target="_blank" href="https://github.com/aripovjr">
          <i>
            <BsInstagram />
          </i>
        </Link>
      </div>
      <div className={classes.buttonContainer}>
        <button>Download CV</button>
        <button>Contact Me</button>
      </div>
    </div>
  );
}

export default Media;
