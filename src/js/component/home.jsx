import React from "react";
import Card from "./card.jsx"
import Navbar from "./navbar.jsx"
import Jumbotron from "./jumbotron.jsx"
import Foot from "./foot.jsx"
//include images into your bundle


//create your first component
const Home = () => {
	return (
		
		<div className="text-center"style={{"background":"#ff572275"}} >
			
			<Navbar titulo="Disney" link1="Homr" link2="Conocenos" link3="Estudia con Nosotros"/>
			
			<div className=" d-flex justify-content-center mt-5">
				<Jumbotron titulo="Bienvenido a la pagina de disney " mensaje="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, dolore eveniet modi ipsa ut incidunt unde beatae aliquam quaerat, sed, omnis iusto nam quasi rem corrupti? Id officiis soluta fugit?"/></div>
			
			<div className ="row d-flex justify-content-center mt-5">
				<Card titulo="Card title" img="https://th.bing.com/th/id/OIP.VkmuY-cYk-hvLPfYUlET0QHaEK?pid=ImgDet&rs=1" mensaje="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, ab cum? Tenetur ex modi magnam beatae consectetur, voluptate eaque, a ratione architecto nesciunt, in ea? Quibusdam fuga eos praesentium illum." buttonLabel="Find Out More!"/>
				<Card titulo="Card title" img="https://th.bing.com/th/id/OIP.SGtTsFFi0fSvfDJEanYSWAHaDt?pid=ImgDet&rs=1" mensaje="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, ab cum? Tenetur ex modi magnam beatae consectetur, voluptate eaque, a ratione architecto nesciunt, in ea? Quibusdam fuga eos praesentium illum." buttonLabel="Find Out More!"/>
				<Card titulo="Card title" img="https://th.bing.com/th/id/R.07a8408b805e20997a43f89d8851216d?rik=vyCjlsDXSgh%2fvA&pid=ImgRaw&r=0&sres=1&sresct=1" mensaje="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, ab cum? Tenetur ex modi magnam beatae consectetur, voluptate eaque, a ratione architecto nesciunt, in ea? Quibusdam fuga eos praesentium illum." buttonLabel="Find Out More!"/>
				<Card titulo="Card title" img="https://2.bp.blogspot.com/-zhVzx26dO0A/UE9YCpbs7JI/AAAAAAAA5M0/Zag_NQk370U/s1600/pd19.jpg" mensaje="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, ab cum? Tenetur ex modi magnam beatae consectetur, voluptate eaque, a ratione architecto nesciunt, in ea? Quibusdam fuga eos praesentium illum." buttonLabel="Find Out More!"/>
				
				</div>

				<div className="mt-5"><Foot mensaje="Copyright @ Your Website 2022"/></div>
			
			
		</div>
	);
};

export default Home;
