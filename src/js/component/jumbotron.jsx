import React from 'react'
import PropTypes from 'prop-types';
function Jumbotron (props){
    return (<div className="jumbotron m-105px" style={{"background":"#e4e3e3" , "padding":"50px" , "margin":"110px" }}>
    <h1 class="display-4 d-flex">{props.titulo}</h1>
    <p class="lead text-start">{props.mensaje}</p>
    
    
    <a class="btn btn-primary btn-lg" href="#" role="button" style={{"display": "table"}}>Call to Action!</a>
  </div>
 
);
}
Jumbotron.propTypes = {
  
  titulo:  PropTypes.string,
  mensaje:  PropTypes.string,
 };
export default Jumbotron;