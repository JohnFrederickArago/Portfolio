import Hero from "../../../assets/works/Offset '24 - Photo/Offset24.1.jpg";
import OffsetImage1 from "../../../assets/works/Offset '24 - Photo/Offset24.2.jpg";
import OffsetImage2 from "../../../assets/works/Offset '24 - Photo/Offset24.3.jpg";
import OffsetImage3 from "../../../assets/works/Offset '24 - Photo/Offset24.4.jpg";
import OffsetImage4 from "../../../assets/works/Offset '24 - Photo/Offset24.5.jpg";
import OffsetImage6 from "../../../assets/works/Offset '24 - Photo/Offset24.7.jpg";
import OffsetImage8 from "../../../assets/works/Offset '24 - Photo/Offset24.9.jpg";
import OffsetImage9 from "../../../assets/works/Offset '24 - Photo/Offset24.10.jpg";
import OffsetImage11 from "../../../assets/works/Offset '24 - Photo/Offset24.12.jpg";

function Offset24_1() {
  return (
    <>
      <div className="portfolio-container">
        <div className="portfolio-header">
          <p>'24 CAR CULTURE EXHIBITION</p>
        </div>
        <div className="header-hero-img">
          <img
            src={Hero}
            alt="Offset24 Hero Image"
            className="offset24-image"
          />
        </div>

        <div className="portfolio-about">
          <div className="portfolio-about-left">
            <p>
              Recorded the pulse and spirit of a major automotive convention
              through a story told in photos. I worked with focus on
              composition, atmosphere and the relationship of individuals and
              their vehicles to illustrate how people engage with their
              machines.
            </p>
          </div>
          <div className="portfolio-about-right">
            <div className="portfolio-about-right-top">
              <div className="date">
                <p className="gray">DATE:</p> <p>2024</p>
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

        <div className="portfolio-works">
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
            src={OffsetImage11}
            alt="Offset Work 11"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </>
  );
}
export default Offset24_1;
