import Hero from "../../../assets/works/Adidas Climacool - Photo/Climacool-Design1.jpg";
import AdidasImage1 from "../../../assets/works/Adidas Climacool - Photo/Climacool1.jpg";
import AdidasImage2 from "../../../assets/works/Adidas Climacool - Photo/Climacool2.jpg";
import AdidasImage3 from "../../../assets/works/Adidas Climacool - Photo/Climacool3.jpg";
import AdidasImage4 from "../../../assets/works/Adidas Climacool - Photo/Climacool4.jpg";
import AdidasImage5 from "../../../assets/works/Adidas Climacool - Photo/Climacool5.jpg";
import AdidasImage6 from "../../../assets/works/Adidas Climacool - Photo/Print Media.jpg";

function Adidas1() {
  return (
    <>
      <div className="portfolio-container">
        <div className="portfolio-header">
          <p>CREATIVE AD CONCEPT</p>
        </div>
        <div className="header-hero-img">
          <img src={Hero} alt="Adidas Hero Image" className="adidas-image" />
        </div>

        <div className="portfolio-about">
          <div className="portfolio-about-left">
            <p>
              Spec ad concept campaign that combined photo and graphic elements
              for cohesiveness. Highlighted use of motion, a brand story, and
              clean and uncluttered design layout in developing dynamic
              marketing images.
            </p>
          </div>
          <div className="portfolio-about-right">
            <div className="portfolio-about-right-top">
              <div className="date">
                <p className="gray">DATE:</p> <p>2024</p>
              </div>
              <div className="client">
                <p className="gray">CLIENT:</p>
                <p>Adidas (Spec Ad)</p>
              </div>
            </div>
            <div className="portfolio-about-right-bottom">
              <div className="type">
                <p className="gray">TYPE:</p>
                <p>Graphic Design</p>
                <p>Brand Campaign</p>
                <p>Product Shoot</p>
                <p>Art Direction</p>
              </div>
            </div>
          </div>
        </div>

        <div className="portrait-img-list">
          <img
            src={AdidasImage6}
            alt="Adidas Work 6"
            className="portrait-img"
          />
        </div>

        <div className="square-img-list">
          <img
            src={AdidasImage1}
            alt="Adidas Work 1"
            loading="lazy"
            decoding="async"
          />
          <img
            src={AdidasImage2}
            alt="Adidas Work 2"
            loading="lazy"
            decoding="async"
          />
          <img
            src={AdidasImage3}
            alt="Adidas Work 3"
            loading="lazy"
            decoding="async"
          />
          <img
            src={AdidasImage4}
            alt="Adidas Work 4"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="square-img-ind">
          <img
            src={AdidasImage5}
            alt="Adidas Work 5"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </>
  );
}
export default Adidas1;
