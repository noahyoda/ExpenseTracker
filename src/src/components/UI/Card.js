import './Card.css';

function Card(props){
    //don't forget space after text before closing parenthesis
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>;
}
//value of children in react is always what's inbetween open and closing
//call to function
export default Card;