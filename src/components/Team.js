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
      <h1 id='ourTeam'>Our team</h1>
    <div
      className="testimonial"
      style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
    >
      <div style={{ width: "50%", textAlign: "center" }}>
        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} {...settings}>
          <Card img="./images/team/profile/pinak.jpg" name="Pinak Dattaray" role="    Founder and CEO" 
          testimonial="Ex McK Junior Partner, 8 years of experience building AI apps for industrial enterprises. Topper from IIT D, IIM C, ET 30 under 30."
          />
          <Card img="./images/team/profile/navneet.jpeg" name="Navneet Singh" role="    Head of analytics"
          testimonial="8 years of experience building AI models and building data science teams, first in Deloitte and then in McKinsey."
          />
          <Card img="./images/team/profile/ananth.jpeg" name="Ananth Govind Rajan" role="    Advisor to Ripik.ai "
          testimonial="PhD in Chemical Engg from Massachusetts Institute of Technology. Silver Medalist from IIT Delhi. Faculty at IISc Bangalore with expertise in AI/ML applied to the chemical sciences."
          />
          <Card img="./images/team/profile/purva_jain.jpg" name="Purva Jain" role="    Chief People Officer "
          testimonial="8 years of experience in leading teams and managing their problems."
          />
          <Card img="./images/team/profile/Anindita Chattaraj.jpg"  name="Anindita Chattaraj" role="    Design specialist"
          testimonial="1000+ designs, 10+ years of experience."
          />
          <Card img="./images/team/profile/Vaibhav.png" name="Vaibhav" role="    Back end specialist "
          testimonial="Top coder in all leading coding competitions, IIT D coding ninja."
          />
          <Card img="./images/team/profile/Pratham Gupta.jpg" name="Pratham Gupta" role="    ML expert from IIIT Hyderabad "
          testimonial="Deep experience in building algorithms."
          />
          <Card img="./images/team/profile/gargi.jpeg" name="Gargi Sharma" role="    Data scientist from IIT Delhi"
          testimonial="Churns out ML models day in and day out."
          />
          <Card img="./images/team/profile/Aayush.jpg" name="Aayush Kadam" role="    Front end specialist from IIT Bombay , Google"
          testimonial="Deep conceptual thinker, topper in all coding competitions."
          />
          

        </Slider>
      </div>
    </div>
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
      <p style={{ fontStyle: "bold", color: "white", fontWeight: 600, fontSize: 20, fontFamily: "Poppins" }}>
        {testimonial}
      </p>
      <p style={{ fontStyle: "bold", marginTop: 25, fontWeight: 600, color: "white", fontSize: 20, fontFamily: "Poppins" }}>
        <span style={{ color: "#4CACBC" }}>{name}</span> ,              {role}
      </p>
    </div>
  );
};

export default Team;
