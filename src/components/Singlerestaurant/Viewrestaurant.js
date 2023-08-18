import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { base_url } from '../../baseUrl';
import axios from 'axios'
import './Viewrestaurant.css'
import ListGroup from 'react-bootstrap/ListGroup';
import OparatingHours from '../operatingHours/OparatingHours';
import Reviews from '../reviews/Reviews';


function Viewrestaurant() {


  //params -  destructuring {} know the id key
  const { id } = useParams()
  console.log(id);

  //state to hold rest details
  const [restaurantDetail, setRestaurantdetail] = useState({})

  //api call to get particular rest

  const fetchData = async () => {
    const { data } = await axios.get(`${base_url}/restaurants/${id}`)
    setRestaurantdetail(data)
  }

  console.log(restaurantDetail);

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='bg-black'  >
      {
        restaurantDetail &&
        <div className='details'>
          <div >
            <img style={{ width: '600px', height: '50vh', maxWidth: '100%' }} src={`${restaurantDetail.photograph}`} alt="" />
          </div>

          <div className='text-center mt-4' style={{ width: '500px', maxWidth: '100%' }}>
            <h3><strong>{restaurantDetail.name}</strong></h3>
            <p style={{ color: 'yellow' }}>{restaurantDetail.address}</p>
            <ListGroup variant="flush">
              <ListGroup.Item style={{ backgroundColor: 'unset', border: 'none' }}>
                <OparatingHours oh={restaurantDetail.operating_hours} />
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: 'unset' }}><Reviews review={restaurantDetail.reviews} /></ListGroup.Item>
            </ListGroup>
          </div>
        </div>
      }

    </div>
  )
}

export default Viewrestaurant