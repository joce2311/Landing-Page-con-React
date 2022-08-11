import React from 'react'
import PropTypes from 'prop-types';
function Card(props){
    return (<div className="card mx-4 " style={{'width' :"18rem"}}>
    <img src={props.img} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{props.titulo}</h5>
      <p className="card-text">{props.mensaje}</p>
      <a href="#" className="btn btn-primary">{props.buttonLabel}</a>
    </div>
  </div>
    );
}
Card.propTypes = {
  img:  PropTypes.string,
  titulo:  PropTypes.string,
  mensaje:  PropTypes.string,
  buttonLabel: PropTypes.string,
 };
export default Card;