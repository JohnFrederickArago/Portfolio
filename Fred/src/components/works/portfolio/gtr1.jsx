import Hero from "../../../assets/works/Flat 12 - Photo/Flat12.11.jpg";
import GTRImage1 from "../../../assets/works/Flat 12 - Photo/Flat12.1.jpg";
import GTRImage2 from "../../../assets/works/Flat 12 - Photo/Flat12.2.jpg";
import GTRImage3 from "../../../assets/works/Flat 12 - Photo/Flat12.3.jpg";
import GTRImage4 from "../../../assets/works/Flat 12 - Photo/Flat12.4.jpg";
import GTRImage5 from "../../../assets/works/Flat 12 - Photo/Flat12.5.jpg";
import GTRImage6 from "../../../assets/works/Flat 12 - Photo/Flat12.6.jpg";
import GTRImage7 from "../../../assets/works/Flat 12 - Photo/Flat12.7.jpg";
import GTRImage8 from "../../../assets/works/Flat 12 - Photo/Flat12.8.jpg";
import GTRImage9 from "../../../assets/works/Flat 12 - Photo/Flat12.9.jpg";
import GTRImage10 from "../../../assets/works/Flat 12 - Photo/Flat12.10.jpg";
import GTRImage11 from "../../../assets/works/Flat 12 - Photo/Flat12.12.jpg";

function GTR1() {
  return (
    <>
      <div className="portfolio-container">
        <div className="portfolio-header">
          <p>GT-R RELEASE EVENT</p>
        </div>
        <div className="header-hero-img">
          <img src={Hero} alt="GTR Hero Image" className="gtr-image" />
        </div>

        <div className="portfolio-about">
          <div className="portfolio-about-left">
            <p>
              Captured a launch photoshoot for the Nissan GT-R in collaboration
              with Flat12, focusing on its performance-driven design, detailing,
              and presence during the release. Emphasized strong composition and
              lighting to convey the energy of the launch while highlighting the
              vehicle’s form and character for promotional and marketing use.
            </p>
          </div>
          <div className="portfolio-about-right">
            <div className="portfolio-about-right-top">
              <div className="date">
                <p className="gray">DATE:</p> <p>2024</p>
              </div>
              <div className="client">
                <p className="gray">CLIENT:</p>
                <p>Flat 12</p>
              </div>
            </div>
            <div className="portfolio-about-right-bottom">
              <div className="type">
                <p className="gray">TYPE:</p>
                <p>Automotive</p>
                <p>Photography</p>
                <p>Composition</p>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio-works">
          <img
            src={GTRImage3}
            alt="GTR Work 3"
            loading="lazy"
            decoding="async"
          />
          <img
            src={GTRImage4}
            alt="GTR Work 4"
            loading="lazy"
            decoding="async"
          />
          <img
            src={GTRImage5}
            alt="GTR Work 5"
            loading="lazy"
            decoding="async"
          />
          <img
            src={GTRImage6}
            alt="GTR Work 6"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="landscape-img">
          <img
            src={GTRImage1}
            alt="GTR Work 1"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="portfolio-works">
          <img
            src={GTRImage2}
            alt="GTR Work 2"
            loading="lazy"
            decoding="async"
          />
          <img
            src={GTRImage7}
            alt="GTR Work 7"
            loading="lazy"
            decoding="async"
          />
          <img
            src={GTRImage8}
            alt="GTR Work 8"
            loading="lazy"
            decoding="async"
          />
          <img
            src={GTRImage9}
            alt="GTR Work 9"
            loading="lazy"
            decoding="async"
          />
          <img
            src={GTRImage10}
            alt="GTR Work 10"
            loading="lazy"
            decoding="async"
          />
          <img
            src={GTRImage11}
            alt="GTR Work 11"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </>
  );
}
export default GTR1;
