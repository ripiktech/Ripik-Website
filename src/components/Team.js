import './CSS/Team.css';
// import { Carousel } from 'react-bootstrap';


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
};
const Team = () => {
  return (
    <div className='team__container'>
      <h1>Our team</h1>
    <section  id='our-team'>
    <div
      className="testimonial"
      style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
    >
      <div style={{ width: "50%", textAlign: "center" }}>
        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} {...settings}>
          <Card img="./images/team/profile/pinak_jain.jpg" name="Pinak Jain" role="Founder and CEO" 
          testimonial="Ex McK Junior Partner, 8 years of experience building AI apps for industrial enterprises. Topper from IIT D, IIM C, ET 30 under 30."
          />
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/1.jpg" name="Navneet Singh" role="Head of analytics"
          testimonial="8 years of experience building AI models and building data science teams, first in deloitte and then in McKinsey."
          />
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/3.jpg" name="Ananth Govind Rajan" role="Advisor to Ripik.ai "
          testimonial="PhD in AI-ML from MIT, Boston, Institute rank 1 at IIT Delhi."
          />
          <Card img="./images/team/profile/purva_jain.jpg" name="Purva Jain" role="Chief People Officer "
          testimonial="8 years of experience in leading teams and managing their problems."
          />
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/3.jpg" name="Anindita Chattaraj" role="Design specialist"
          testimonial="1000+ designs, 10+ years of experience."
          />
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/3.jpg" name="Vaibhav" role="Back end specialist "
          testimonial="Top coder in all leading coding competitions, IIT D coding ninja."
          />
          <Card img="./images/team/profile/pratham.jpg" name="Pratham Gupta" role="ML expert from IIIT Hyderabad "
          testimonial="Deep experience in building algorithms."
          />
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/3.jpg" name="Gargi Sharma" role="Data scientist from IIT Delhi"
          testimonial="Churns out ML models day in and day out."
          />
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/3.jpg" name="Aayush Kadam" role="Front end specialist from IIT Bombay , Google"
          testimonial="Deep conceptual thinker, topper in all coding competitions."
          />
          

        </Slider>
      </div>
    </div>
    </section>
    </div>
  );
};

const Card = ({ img, name, role, testimonial }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "gray",
      }}
    >
      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
        style={{
          width: 120,
          height: 120,
          border: "1px solid lightgray",
          padding: 7,
          marginBottom: 20,
        }}
      />
      <p style={{ fontWeight: 600 }}>
        {testimonial}
      </p>
      <p style={{ fontStyle: "italic", marginTop: 25, fontWeight: 600 }}>
        <span style={{ fontWeight: 600, color: "green" }}>{name}</span> ,
        {role}
      </p>
    </div>
  );
};

export default Team;
