import classes from "./CardModules.css";

const Card = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
