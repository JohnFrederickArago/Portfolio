import Hero from "../../../assets/works/FOG State - Photo/Post - Fear of God-04.jpg";
import FOGImage1 from "../../../assets/works/FOG State - Photo/Post - Fear of God-01.jpg";
import FOGImage2 from "../../../assets/works/FOG State - Photo/Post - Fear of God-02.jpg";
import FOGImage3 from "../../../assets/works/FOG State - Photo/Post - Fear of God-03.jpg";
import FOGImage4 from "../../../assets/works/FOG State - Photo/Post - Fear of God-05.jpg";

function FOG1() {
  return (
    <>
      <div className="portfolio-container">
        <div className="portfolio-header">
          <p>EDITORIAL FASHION SHOOT</p>
        </div>
        <div className="header-hero-img">
          <img src={Hero} alt="FOG Hero Image" className="fog-image" />
        </div>

        <div className="portfolio-about">
          <div className="portfolio-about-left">
            <p>
              Conceptualized and executed a spec ad campaign for Fear of God’s
              State Jacket. With understated styling, composition and moody
              lighting to align with Fear of God’s streetwear ethos, I created
              imagery that could exist in an editorial, or campaign landscape.
            </p>
          </div>
          <div className="portfolio-about-right">
            <div className="portfolio-about-right-top">
              <div className="date">
                <p className="gray">DATE:</p> <p>2025</p>
              </div>
              <div className="client">
                <p className="gray">CLIENT:</p>
                <p>FEAR OF GOD STATE</p>
              </div>
            </div>
            <div className="portfolio-about-right-bottom">
              <div className="type">
                <p className="gray">TYPE:</p>
                <p>Spec Campaign</p>
                <p>Editorial</p>
                <p>Photography</p>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio-works">
          <img
            src={FOGImage2}
            alt="FOG Work 2"
            loading="lazy"
            decoding="async"
          />
          <img
            src={FOGImage4}
            alt="FOG Work 4"
            loading="lazy"
            decoding="async"
          />
          <img
            src={FOGImage1}
            alt="FOG Work 1"
            loading="lazy"
            decoding="async"
          />
          <img
            src={FOGImage3}
            alt="FOG Work 3"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </>
  );
}
export default FOG1;
