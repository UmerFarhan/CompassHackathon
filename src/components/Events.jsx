// src/components/Events.jsx
import React from 'react';
import moment from 'moment';
import image1 from '../assets/images/image-1.png'
import image2 from '../assets/images/image-2.jpg'
import image3 from '../assets/images/image-3.webp'
import image4 from '../assets/images/image-4.webp'
import image5 from '../assets/images/image-5.webp'
import image6 from '../assets/images/image-6.webp'


const events = [
  {
    date: '2024-01-18',
    endDate: '2024-01-22',
    name: 'Spring Groups 2024',
    details: 'Hosted by BLAST',
    image: image1,
  },
  {
    date: '2024-04-03',
    endDate: '2024-04-07',
    name: 'Spring Showdown 2024',
    details: 'Hosted by BLAST',
    image: image2,
  },
  {
    date: '2024-06-19',
    endDate: '2024-06-23',
    name: 'Spring Final 2024',
    details: 'Hosted by BLAST',
    image: image3,
  },
  {
    date: '2024-07-19',
    endDate: '2024-07-23',
    name: 'Fall Groups 2024',
    details: 'Hosted by BLAST',
    image: image4,
  },
  {
    date: '2024-10-17',
    endDate: '2024-10-21',
    name: 'Fall Showdown 2024',
    details: 'Hosted by BLAST',
    image: image5,
  },
  {
    date: '2024-12-11',
    endDate: '2024-12-15',
    name: 'World Final 2024',
    details: 'Hosted by BLAST',
    image: image6,
  },
];


const calculateDaysRemaining = (eventDate) => {
    const today = moment();
    const event = moment(eventDate);
    return event.diff(today, 'days');
  };
  
  const Events = () => {
    return (
      <section className="bg-primary py-20 h-screen flex flex-col items-center">
        <h2 className="text-4xl text-blue-500 font-bold mb-12">Blast Premier Events</h2>
        <div className="relative w-full px-8">
          <div className="relative w-full h-2 bg-gray-700 mb-12">
            <div className="absolute top-0 h-2 bg-blue-500" style={{ width: '10%' }} />
            {events.map((event, index) => (
              <div
                key={index}
                className="absolute top-0 h-2 bg-secondary"
                style={{ left: `${(index + 1) * (100 / events.length)}%` }}
              />
            ))}
          </div>
        </div>
        <div className="relative w-full flex justify-between px-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="relative w-1/6 bg-black m-4 p-6 shadow-lg rounded-lg border border-gray-700"
              style={{ backgroundImage: `url(${event.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-6">
                <p className="text-lg font-bold text-blue-500">
                  {moment(event.date).format('MMM DD')} - {moment(event.endDate).format('MMM DD')}
                </p>
                <p className="text-xl text-white">{event.name}</p>
                <p className="text-sm text-gray-400">{event.details}</p>
                <p className="text-sm text-gray-400">{calculateDaysRemaining(event.date)} days remaining</p>
                <button className="mt-4 px-4 py-2 bg-secondary text-white rounded">Get Tickets</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Events;