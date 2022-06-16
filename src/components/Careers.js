import React from 'react';
import './CSS/Cards.css';
import CareerCardItems from './CareerCardItems';

function Careers() {
  return (
    
    <div className='cards-careers'>
      
      <h1>We are hiring!</h1>
      <section id = "careers">
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CareerCardItems
              src='images/img_avatar.png'
              text='EA to Founder/CEO'
              label='Data Scientist'
              text2='You will have to manage the calender; Highlight Overlaps, schedule flights.....'
              linkName = 'https://docs.google.com/document/d/1rmIjgvdhHqWYhDmwAJxzJa7Jf70sRbzM/edit?usp=sharing&ouid=107563282006842937771&rtpof=true&sd=true'
            />
            <CareerCardItems
              src='images/img_avatar.png'
              text='ML engineer'
              label='ML Engineer'
              text2="Should be expert data engineer (Hadoop, Spark, ELK, Kafka, NiFi, etc)....."
              linkName = 'https://docs.google.com/document/d/1Sv9IzJyyxBhxcpZwOlnchbj_fmrycAt0/edit?usp=sharing&ouid=107563282006842937771&rtpof=true&sd=true'
            />
            <CareerCardItems
              src='images/img_avatar.png'
              text='Frontend engineer'
              label='Frontend Engineer'
              text2="Should be expert in HTML, CC, JavaScipt (React, Angular), Typescript....."
              linkName = 'https://docs.google.com/document/d/1Sv9IzJyyxBhxcpZwOlnchbj_fmrycAt0/edit?usp=sharing&ouid=107563282006842937771&rtpof=true&sd=true'
            />
            
          </ul>

          
        </div>
      </div>
      </section>
    </div>
  );
}

export default Careers;
