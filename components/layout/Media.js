import React from "react";
import classes from "./../layout/Media.module.css";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import Link from "next/link";
import { GithubTooltip } from "../media-icons/GithubTooltip";
import { LinkedinTooltip } from "../media-icons/LinkedinTooltip";
import { TwitterTooltip } from "../media-icons/TwitterTooltip";
import { InstagramTooltip } from "../media-icons/InstagramTooltip";

function Media() {
  return (
    <div className={classes.mediaContainer}>
      <div className={classes.mediaLinks}>
        <Link target="_blank" href="https://github.com/aripovjr">
          <GithubTooltip />
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/jasurbek-aripov-254a43211/"
        >
          <LinkedinTooltip />
        </Link>
        <Link target="_blank" href="https://twitter.com/aripovofficial">
          <TwitterTooltip />
        </Link>
        <Link target="_blank" href="https://www.instagram.com/aripovjr/">
          <InstagramTooltip />
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
