import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Singlerestaurant({singleView}) {
  return (
    <div>
        
           <Link to={`view/${singleView.id}`} style={{textDecoration:'none'}}>

              <Card className='mt-3 bg-black' style={{ width: '300px' }}>
             <Card.Img variant="top" style={{height:'250px'}} src={singleView.photograph} />
             <Card.Body>
              <Card.Title><h2><strong>{singleView.name}</strong></h2></Card.Title>
               <Card.Text style={{color:'yellow'}}>
                {singleView.address}
              </Card.Text>
            </Card.Body>
          </Card>

           </Link>
        
    </div>
  )
}

export default Singlerestaurant