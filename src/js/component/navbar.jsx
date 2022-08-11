import React from 'react'
import PropTypes from 'prop-types';
function Navbar(props){
    return(
    <nav className="navbar navbar-expand-lg  row-reverse" style={{"background" : "#222528"}}>
      <img src="https://th.bing.com/th/id/R.8d98d88f8ac0b5237f0937ef196ca42d?rik=ZN2pxkp6As2lPw&riu=http%3a%2f%2fpic.mairuan.com%2fWebSource%2fhuishenghuiying%2fnews%2fold%2fuploads%2fimages%2fangela%2f1.jpg&ehk=uPmO%2bzFVbe9EhAaGdIaQJiE4X4Y4cISnONSOOnh473s%3d&risl=&pid=ImgRaw&r=0" alt="" style={{"height": "59px" , "border-radius":"30px"}} />
    <div className="container-fluid d-flex justify-content-between">
    <div className=''><a className="navbar-brand"style={{"color" : "white"}} href="#">{props.titulo}</a></div>
      <div className="collapse navbar-collapse justify-content-end" id="navbarScroll" >
        <ul className="navbar-nav  my-2 my-lg-0 navbar-nav-scroll " style={{"--bs-scroll-height": "100px;"}}>
          <li className="nav-item ">
            <a className="nav-link active" aria-current="page" href="#"style={{"color" : "white"}}>{props.link1}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"style={{"color" : "white"}}>{props.link2}</a>
          </li>
          <li className="nav-item dropdown">
          </li>
          <li className="nav-item">
            <a className="nav-link "style={{"color" : "white"}}>{props.link3}</a>
          </li>
      
        </ul>
      </div>
      
    </div>
  </nav>);
}
Navbar.propTypes = {
  
  titulo:  PropTypes.string,
  link1:  PropTypes.string,
  link2:  PropTypes.string,
  link3:  PropTypes.string,
 };
export default Navbar;