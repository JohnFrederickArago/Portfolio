import Hero from "../../../assets/works/Offset '25 - Photo/Offset2.1.jpg";
import OffsetImage1 from "../../../assets/works/Offset '25 - Photo/Offset2.2.jpg";
import OffsetImage2 from "../../../assets/works/Offset '25 - Photo/Offset2.3.jpg";
import OffsetImage3 from "../../../assets/works/Offset '25 - Photo/Offset2.4.jpg";
import OffsetImage4 from "../../../assets/works/Offset '25 - Photo/Offset2.5.jpg";
import OffsetImage5 from "../../../assets/works/Offset '25 - Photo/Offset2.6.jpg";
import OffsetImage6 from "../../../assets/works/Offset '25 - Photo/Offset2.7.jpg";
import OffsetImage8 from "../../../assets/works/Offset '25 - Photo/Offset2.9.jpg";
import OffsetImage9 from "../../../assets/works/Offset '25 - Photo/Offset2.10.jpg";
import OffsetImage10 from "../../../assets/works/Offset '25 - Photo/Offset2.11.jpg";
import OffsetImage11 from "../../../assets/works/Offset '25 - Photo/Offset2.12.jpg";
import OffsetImage12 from "../../../assets/works/Offset '25 - Photo/Offset2.13.jpg";
import OffsetImage13 from "../../../assets/works/Offset '25 - Photo/Offset2.14.jpg";
import OffsetImage14 from "../../../assets/works/Offset '25 - Photo/Offset2.15.jpg";
import OffsetImage15 from "../../../assets/works/Offset '25 - Photo/Offset2.16.jpg";

function Offset1() {
  return (
    <>
      <div className="portfolio-container">
        <div className="portfolio-header">
          <p>'25 CAR CULTURE EXHIBITION</p>
        </div>
        <div className="header-hero-img">
          <img src={Hero} alt="Offset Hero Image" className="offset-image" />
        </div>

        <div className="portfolio-about">
          <div className="portfolio-about-left">
            <p>
              Explored automotive culture through a storytelling-driven
              approach, capturing the details, atmosphere, and human connections
              that defined the event. Through thoughtful composition and timing,
              the imagery highlighted the passion, craftsmanship, and community
              surrounding the showcased vehicles, creating a visual narrative
              that reflected the unique energy and character of the gathering.
            </p>
          </div>
          <div className="portfolio-about-right">
            <div className="portfolio-about-right-top">
              <div className="date">
                <p className="gray">DATE:</p> <p>2025</p>
              </div>
              <div className="client">
                <p className="gray">CLIENT:</p>
                <p>Offset DXB</p>
              </div>
            </div>
            <div className="portfolio-about-right-bottom">
              <div className="type">
                <p className="gray">TYPE:</p>
                <p>Visual Storytelling</p>
                <p>Composition</p>
              </div>
            </div>
          </div>
        </div>

        <div className="landscape-img-list">
          <img
            src={OffsetImage1}
            alt="Offset Work 1"
            loading="lazy"
            decoding="async"
          />
          <img
            src={OffsetImage2}
            alt="Offset Work 2"
            loading="lazy"
            decoding="async"
          />
          <img
            src={OffsetImage3}
            alt="Offset Work 3"
            loading="lazy"
            decoding="async"
          />
          <img
            src={OffsetImage4}
            alt="Offset Work 4"
            loading="lazy"
            decoding="async"
          />
          <img
            src={OffsetImage5}
            alt="Offset Work 5"
            loading="lazy"
            decoding="async"
          />
          <img
            src={OffsetImage6}
            alt="Offset Work 6"
            loading="lazy"
            decoding="async"
          />
          <img
            src={OffsetImage8}
            alt="Offset Work 7"
            loading="lazy"
            decoding="async"
          />
          <img
            src={OffsetImage9}
            alt="Offset Work 8"
            loading="lazy"
            decoding="async"
          />
          <img
            src={OffsetImage10}
            alt="Offset Work 9"
            loading="lazy"
            decoding="async"
          />
          <img
            src={OffsetImage11}
            alt="Offset Work 11"
            loading="lazy"
            decoding="async"
          />
          <img
            src={OffsetImage12}
            alt="Offset Work 12"
            loading="lazy"
            decoding="async"
          />
          <img
            src={OffsetImage13}
            alt="Offset Work 13"
            loading="lazy"
            decoding="async"
          />
          <img
            src={OffsetImage14}
            alt="Offset Work 14"
            loading="lazy"
            decoding="async"
          />
          <img
            src={OffsetImage15}
            alt="Offset Work 15"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </>
  );
}
export default Offset1;
