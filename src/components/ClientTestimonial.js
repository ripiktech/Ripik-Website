import './CSS/Team.css';
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
const ClientTestimonial = () => {
  return (
    <div className='team__container' id='our-team'>
      <h1>What our clients have to say</h1>  
    <div
      className="testimonial"
      style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
    >
      <div style={{ width: "50%", textAlign: "center" }}>
        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} {...settings}>
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/2.jpg" name="Parijat Gupta" role="Head of projects, DCM Shriram"
          testimonial="The model is delivering very significant cost savings, to the tune of INR 20 Cr per annum, commendable job by the team."
          />
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/1.jpg" name="Saurabh Singh" role="President, Grasim"
          testimonial="Ripik.AI operates as speed and quality and with their in-depth understanding of how AI works, they are also able to convince plant very well."
          />
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/3.jpg" name="Samit Datta" role="CTO, PGP Glass" 
          testimonial="Ripik.AI has a great sense of how to derive value using technology in industrial settings."
          />
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/2.jpg" name="Poorav Sheth" role="Group CDO, Godrej and Boyce" 
          testimonial="Pinak and his team have worked with us closely for several manufacturing transformation use cases. They have an unparalleled understanding of the process and can bring impact very quickly."
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
      {/* <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
        style={{
          width: 120,
          height: 120,
          border: "1px solid lightgray",
          padding: 7,
          marginBottom: 20,
        }}
      /> */}
      <p style={{ fontWeight: 600 , color: '#fff', fontSize: '20px'}}>
        {testimonial}
      </p>
      <p style={{ fontStyle: "italic", marginTop: 25, fontWeight: 600 }}>
        <span style={{ fontWeight: 600, color: '#ddd'}}>{name}, {role}</span>
      </p>
    </div>
  );
};

export default ClientTestimonial;
