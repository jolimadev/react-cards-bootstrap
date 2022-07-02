import React from 'react'
import Card from './Card'
import image1 from '../assets/image-1.jpg'
import image3 from '../assets/image-3.jpg'
import image2 from '../assets/image-2.jpg'

const cards = [
    {
        id: 1,
        title: 'Messi',
        image: image1,
        url: 'https://www.linkedin.com/in/juanolima/'
    },
    {
        id: 2,
        title: 'Haaland',
        image: image3,
        url: 'https://www.linkedin.com/in/juanolima/'
    },
    {
        id: 3,
        title: 'CR7',
        image: image2,
        url: 'https://www.linkedin.com/in/juanolima/'
    }
]

function Cards() {
  return (
    <div className='container d-flex justify-content-center align-items-center h-100'>
        <div className='row'>
           {
            cards.map(card => (
                <div className='col-md-4' key={card.id}>
                <Card title={card.title} imageSource={card.image} url={card.url}/>
                </div>
            ))
           }
           
        </div>
    </div>
  )
}

export default Cards