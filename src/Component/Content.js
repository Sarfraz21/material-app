import React from "react";
import "./Content.css";
import clsx from "clsx";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
   content__main : {
       textAlign:'center',
        paddingLeft:'320px',
        marginTop:'10px',
    width:'100%'
   },
})

const Content = () => {
  const classes = useStyles()
  return (
    <div>
      <h1
        className={clsx('header',(classes.content__main))}
      >
        lets go
      </h1>
      <p className={clsx('text_info')}></p>
    </div>
  );
};

export default Content;
