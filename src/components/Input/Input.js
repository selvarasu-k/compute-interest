import React from "react";
import classes from "./Input.module.css";

const Input = ({className, label, id, ...props }) => {
  return (
    <div className={`${classes["input-element"]} ${className}`}>
        <div className={classes["wrapper"]}>
            <div className={classes["input-data"]}>
                <input id={id} {...props} autoComplete="off"/>
                <div className={classes["underline"]}></div>
                <label htmlFor={id}>{label}</label>
            </div>
        </div>
    </div>
  );
};

export default Input;