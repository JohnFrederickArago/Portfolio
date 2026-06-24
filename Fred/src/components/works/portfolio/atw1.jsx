import Hero from "../../../assets/works/ATW - Graphic Design/Post2.jpg";
import ATWImage1 from "../../../assets/works/ATW - Graphic Design/Brochure1.jpg";
import ATWImage2 from "../../../assets/works/ATW - Graphic Design/Brochure2.jpg";
import ATWImage3 from "../../../assets/works/ATW - Graphic Design/MockUp1.jpg";
import ATWImage4 from "../../../assets/works/ATW - Graphic Design/MockUp2.jpg";
import ATWImage5 from "../../../assets/works/ATW - Graphic Design/Post3.jpg";
import ATWImage6 from "../../../assets/works/ATW - Graphic Design/Post4.jpg";
import ATWImage7 from "../../../assets/works/ATW - Graphic Design/Post5.jpg";
import ATWImage8 from "../../../assets/works/ATW - Graphic Design/Welcome.jpg";

function ATW1() {
  return (
    <>
      <div className="portfolio-container">
        <div className="portfolio-header">
          <p>MARKETING DESIGN INTERN</p>
        </div>
        <div className="header-hero-img">
          <img src={Hero} alt="ATW Hero Image" className="atw-image" />
        </div>

        <div className="portfolio-about">
          <div className="portfolio-about-left">
            <p>
              Worked as a Marketing & Design Intern, supporting the creation of
              branded visual content across print and digital platforms.
              Designed marketing collateral such as brochures, developed social
              media assets, and contributed to establishing brand guidelines to
              ensure a consistent and cohesive visual identity across all
              communications.
            </p>
          </div>
          <div className="portfolio-about-right">
            <div className="portfolio-about-right-top">
              <div className="date">
                <p className="gray">DATE:</p> <p>2025</p>
              </div>
              <div className="client">
                <p className="gray">CLIENT:</p>
                <p>ATW Aviation Training Services</p>
              </div>
            </div>
            <div className="portfolio-about-right-bottom">
              <div className="type">
                <p className="gray">TYPE:</p>
                <p>Marketing Design</p>
                <p>Graphic Design</p>
                <p>Brand Design</p>
              </div>
            </div>
          </div>
        </div>

        <div className="landscape-img-list">
          <img
            src={ATWImage1}
            alt="ATW Work 1"
            className="landscape2"
            loading="lazy"
            decoding="async"
          />
          <img
            src={ATWImage2}
            alt="ATW Work 2"
            className="landscape2"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="portfolio-works">
          <img
            src={ATWImage3}
            alt="ATW Work 3"
            loading="lazy"
            decoding="async"
          />
          <img
            src={ATWImage4}
            alt="ATW Work 4"
            loading="lazy"
            decoding="async"
          />
          <img
            src={ATWImage5}
            alt="ATW Work 5"
            loading="lazy"
            decoding="async"
          />
          <img
            src={ATWImage6}
            alt="ATW Work 6"
            loading="lazy"
            decoding="async"
          />
          <img
            src={ATWImage7}
            alt="ATW Work 7"
            loading="lazy"
            decoding="async"
          />
          <img
            src={ATWImage8}
            alt="ATW Work 8"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </>
  );
}
export default ATW1;
