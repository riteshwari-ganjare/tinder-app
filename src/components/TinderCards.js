import React, { useEffect, useState } from 'react'
import axios from './axios'
import TinderCard from 'react-tinder-card'
const TinderCards = () => {
  const [people, setpeople] =  useState([])
useEffect(()=>{
const fetchData= async ()=>{
  const req=await axios.get("/tinder/cards")
  setpeople(req.data)
}
fetchData()
},[])


  // {
  //   name:"Priyanka Chopra",
  //   url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz8VsBc4mqs8ypb-d-MIhYcBBGc8Y-xlEddA&usqp=CAU"
  // },
  // {
  //   name:"Rani Mukharji",
  //   url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgH5t-BdZFXyNLtMtV0weB3xB-X_OKpluExAA5Yvfc-WmLYt46pTAWk7XeDVa45pKQKbc&usqp=CAU"
  // }
const onSwipe = (direction) => {
  console.log('You swiped: ' + direction)
}

const onCardLeftScreen = (myIdentifier) => {
  console.log(myIdentifier + ' left the screen')
}



  return (
   <div>
     <h1>TinderCards</h1>
     <div className='tinderCardsCardContainer'>
     {
      people.map(person=>(
        <TinderCard className='swipe' key={person.name} preventSwipe={['right','left']}
        onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')
        } >
          <div style={{backgroundImage:`url(${person.url})`}} className='card'>
<h3>{person.name}</h3>
          </div>
        </TinderCard>
      ))
     }
     </div>
     
   </div>
  )
}

export default TinderCards