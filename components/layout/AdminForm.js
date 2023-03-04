import React from "react";
import classes from "./Admin.module.css";

function AdminForm() {
  return (
    <form className={classes.form} id="blogForm">
      <div className={classes.leftSide}>
        <div className={classes.formControl}>
          <label htmlFor="name">Name</label>
          <input name="name" id="name" type="text" />
        </div>
        <div className={classes.formControl}>
          <label htmlFor="surname">Surname</label>
          <input name="surname" id="surname" type="text" />
        </div>
        <div className={classes.formControl}>
          <label htmlFor="email">E-mail</label>
          <input name="email" id="email" type="email" />
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
      </div>
      <div className={classes.rightSide}>
        <textarea rows="20" cols="70" name="blog" form="blogForm">
          Write your blogs
        </textarea>
      </div>
    </form>
  );
}

export default AdminForm;
