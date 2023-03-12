import React, { useRef } from "react";
import classes from "./Admin.module.css";
import Wrapper from "./../layout/Wrapper";

function AdminForm() {
  const nameRef = useRef();
  const surnameRef = useRef();
  const titleRef = useRef();
  const articleRef = useRef();

  const submitForm = (e) => {
    e.preventDefault();
    const blogData = {
      name: nameRef.current.value,
      surname: surnameRef.current.value,
      title: titleRef.current.value,
      article: articleRef.current.value,
    };
    console.log(blogData);
  };

  return (
    <form className={classes.form} id="blogForm" onSubmit={submitForm}>
      <Wrapper>
        <div className={classes.formControl}>
          <label htmlFor="name">Name</label>
          <input ref={nameRef} required name="name" id="name" type="text" />
        </div>
        <div className={classes.formControl}>
          <label htmlFor="surname">Surname</label>
          <input
            ref={surnameRef}
            required
            name="surname"
            id="surname"
            type="text"
          />
        </div>
        <div className={classes.formControl}>
          <label htmlFor="title">Title</label>
          <input ref={titleRef} required name="title" id="title" type="text" />
        </div>
        <div className={classes.formControl}>
          <label className={classes.imgLabel} htmlFor="img">
            Upload your Image
          </label>
          <input
            name="file"
            id="img"
            hidden
            type="file"
            placeholder="Upload Image"
          />
        </div>
        <div className={classes.formControl}>
          <button className={classes.actionButton} type="submit">
            Post
          </button>
        </div>
      </Wrapper>
      <Wrapper>
        <textarea
          ref={articleRef}
          className={classes.textarea}
          rows="18.5"
          cols="55"
          name="blog"
          form="blogForm"
          placeholder="Write your blog article"
        />
      </Wrapper>
    </form>
  );
}

export default AdminForm;
