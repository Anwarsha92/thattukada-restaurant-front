import React, { useEffect, useState } from 'react'
import './Allrestaurants.css'
import axios from 'axios'
import Singlerestaurant from '../Singlerestaurant/Singlerestaurant';
import { base_url } from '../../baseUrl';
import { fetchRestList } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';




function Allrestaurants() {

    const [restaurants,setRestaurants]=useState([])

    const dispatch=useDispatch()


    //code for api

    const fetchRestaurants=async()=>{
       const response= await axios.get(`${base_url}/restaurants`)
        setRestaurants(response.data)
      //  console.log(response.data);
    }

    const {restaurantList}=useSelector(state=>state.restaurantListReducer)

    console.log(restaurantList);

    useEffect(()=>{

      dispatch(fetchRestList())
      
    },[])
  return (
    <div className='text-center bg-black pb-4'>

        <img className='w-100' src="https://img.mylot.com/2729917.jpeg" alt="" />

                <h1 className='thatt'>തട്ടുകട.com</h1>


       <div className='cards'>
            {
                restaurantList.map(restaurant=>(


                  <Singlerestaurant singleView={restaurant}/>

                ))
            }
            
       </div>

    </div>
  )
}

export default Allrestaurants