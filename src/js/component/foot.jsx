import React from 'react'
import PropTypes from 'prop-types';
function Foot(props){
    return(<div class="card text-center" style={{"background": "#222528" ,}}>
    
    <div class="card-body">
      
      <p class="card-text" style={{"color": "white"}}><small>{props.mensaje}</small></p>
      
    </div>
    
  </div>
    );
}
Foot.propTypes = {
  
  
  mensaje:  PropTypes.string,
 };
export default Foot;