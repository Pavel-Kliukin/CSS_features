import React from 'react';
import classes from './GlassCard.module.css'

const GlassCard = () => {
  return (
    <div className={classes.container}>
    <div className={classes.box}>
        <span className={classes.title}>GLASS EFFECT</span>
        <div>
            <strong>JOE WATSON SBF</strong>
            <p>0000 000 000 0000</p>
            <span>VALID</span> <span>01/28</span>
        </div>
    </div>
</div>
  );
};

export default GlassCard;