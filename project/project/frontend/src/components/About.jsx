import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import wall from "../images/wall.png";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


const About = () => {
  return (
    <>
 
    <h1 className="head">About Us</h1>
  
   
      
    <CardGroup>
    <Card style={{ width: '35rem' }}>
      <Card.Img variant="top" src={wall} />
     </Card>
      <Card>
      <Card.Body>
      
      ---WELCOME TO<br/>
<h2>Bakeshop</h2><br />
Founded in Lahore in 2020, the philosophy of Bakeshop was simple; to create connections through desserts while striking the ideal balance between flavor and feeling.<br/><br/>

Since the beginning, BakeShop has secured an irreplaceable spot in the hearts of people.<br/><br/>

Being the quintessential representation of aesthetics and taste, a  dessert is consumed by the eyes well before delighting the tastebuds!
<br/><br/>
<h2>Reaching Nationwide</h2>
<h2>Growing & Expanding</h2><br/>
Our dream to bake the best desserts in town continues to flourish,<br/> and we are over the moon to have created a sweet utopia for dessert lovers to make their sweet escape from reality to fantasy!
</Card.Body>
    </Card>
    </CardGroup>
    
  
 
  </>
  );
}


export default About;
