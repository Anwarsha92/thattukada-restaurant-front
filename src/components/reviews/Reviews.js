import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function Reviews({review}) {
    console.log(review);
  return (
    <div>
      
        <Accordion defaultActiveKey="0" flush>
      <Accordion.Item >
        <Accordion.Header>Reviews</Accordion.Header>
        <Accordion.Body>
        {review?.map(reviewDetails=>(
          <div>
            <h5 style={{textTransform:'uppercase',color:'white'}}>{reviewDetails.name}</h5>
            <p>{reviewDetails.date}</p>
            <p>{reviewDetails.rating}</p>
            <p>{reviewDetails.comments}</p>
            <hr />
          </div>
          ))}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      
        
    
    </div>
  )
}

export default Reviews