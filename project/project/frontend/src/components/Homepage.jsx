
import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Capture from "../images/Capture.png";
import cake1 from "../images/cake1.PNG";
import cake2 from "../images/cake2.PNG";
import cake3 from "../images/cake3.PNG";
import cake6 from "../images/cake6.PNG";
import wall1 from "../images/wall1.png";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Carousel from 'react-bootstrap/Carousel';





function ImageAndTextExample() {
  return (
    <>
     
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Capture}
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={wall1}
          alt="Second slide"
        />

      </Carousel.Item>
    
    </Carousel>
      <CardGroup>
      <Card>
        <Card.Img variant="top"  src={cake3} />
        <Card.Body>
          <Card.Title>Chocolate Cheesecake</Card.Title>
          <Card.Text>
          Original Cheesecake Swirled with Snickers® on a Brownie Crust with Chocolate, Caramel and Peanuts
           
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top"  src={cake2} />
        <Card.Body>
          <Card.Title>Rainbow Cheesecake</Card.Title>
          <Card.Text>
          Layers of Vanilla Cake, Cheesecake, Strawberry, Chocolate and Vanilla Mousse with Cream Cheese Frosting{' '}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top"  src={cake1} />
        <Card.Body>
          <Card.Title>Strawberry Cheesecake</Card.Title>
          <Card.Text>
          Super Creamy Cheesecake with a Delicious and Uniquely “Burnt” Top, Covered with Fresh Berries
          </Card.Text>
        </Card.Body>

      </Card>
    </CardGroup>
    <CardGroup>
    <Card style={{ width: '35rem' }}>
      <Card.Img variant="top" src={cake6} />
      <Card.Body>
        <Card.Text>
        Our whole cheesecakes are served deeply chilled. They travel well and can be stored in your freezer to enjoy later. Defrost in your refrigerator for approximately 2 hours to enjoy at home! All cheesecakes and specialty cakes come in 10-inch sizes, serving 12 – 15 people.
        </Card.Text>
      
      </Card.Body>
      </Card>
      <Card>
      <Card.Body>
---WELCOME TO<br/>
<h2>Bakeshop</h2><br />
Like a fantasy that feels unreal, every delicacy by ‘BakeShop’ holds a charm that enchants with every bite, allowing one to be swept into a moment of bliss, making all your dessert creams come true!

Founded in Lahore in 2020, the philosophy of  Bakeshop was simple; to create connections through desserts while striking the ideal balance between flavor and feeling.

Since the beginning, It has secured an irreplaceable spot in the hearts of people..
<br/><br/>
---Introducing Our<br/>
<h2>Wide Variety of <br/>Delicious Cakes</h2><br />
Being the quintessential representation of aesthetics and taste, dessert is consumed by the eyes well before delighting the tastebuds!


</Card.Body>
    </Card>
   
   
    </CardGroup>
 
 



  
 
  </>
  );
}

export default ImageAndTextExample;



