import Hero from "../../assets/image/Hero2.jpg";
import { m as motion } from "framer-motion";
import { itemVariants } from "../../animations/variants/works/itemVariants";
import { staggerParent } from "../../animations/variants/works/staggerParent";
import { childVariants } from "../../animations/variants/works/childVariants";
import { imageVariants } from "../../animations/variants/works/imageVariants";

function AboutMe() {
  const viewport = { once: true, margin: "-70px 0px -10px 0px" };

  return (
    <>
      <div className="about-container">
        <div className="about-header">
          <p>
            Created visual content for fashion, beauty, and lifestyle brands.
          </p>
        </div>

        <img src={Hero} alt="Hero Image" />

        <div className="about-contents-container">
          <motion.div
            className="about-who"
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <p className="gray">WHO I AM</p>
            <motion.p className="right-about-p" variants={childVariants}>
              Creative & dedicated multimedia designer with a strong portfolio
              of innovative visual solutions. <br /> <br /> Eager to contribute
              design expertise and aesthetic vision to a forward-thinking
              organization.
            </motion.p>
          </motion.div>

          <hr />

          <motion.div
            className="about-services"
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <p className="gray">SERVICES</p>
            <div className="right-about">
              <motion.p variants={childVariants}>Video Production</motion.p>
              <motion.p variants={childVariants}>Photography</motion.p>
              <motion.p variants={childVariants}>Graphic Design</motion.p>
              <motion.p variants={childVariants}>Content Creation</motion.p>
            </div>
          </motion.div>

          <hr />

          <motion.div
            className="about-clients"
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <p className="gray">CLIENTS</p>
            <div className="right-about">
              <motion.p variants={childVariants}>
                Recognized for creative direction and high-quality visual
                content across branding, fashion, and lifestyle projects.
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            className="clients-table"
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <motion.div className="clients-list" variants={childVariants}>
              <p className="clients">CAPUTO FLOUR</p>
              <p className="did-what">CONTENT CREATOR (PART-TIME)</p>
              <p className="client-year">2026</p>
            </motion.div>

            <hr className="line2" />

            <motion.div className="clients-list" variants={childVariants}>
              <p className="clients">L'OREAL X SISTERS BEAUTY LOUNGE</p>
              <p className="did-what">CONTENT CREATOR (PART-TIME)</p>
              <p className="client-year">2026</p>
            </motion.div>

            <hr className="line2" />

            <motion.div className="clients-list" variants={childVariants}>
              <p className="clients">ATW FOR AVIATION TRAINING SERVICES</p>
              <p className="did-what">MARKETING INTERN (FULL-TIME)</p>
              <p className="client-year">2025</p>
            </motion.div>

            <hr className="line2" />

            <motion.div className="clients-list" variants={childVariants}>
              <p className="clients">ROSMETIC MEDICAL CENTER</p>
              <p className="did-what">CONTENT CREATOR (PART-TIME)</p>
              <p className="client-year">2025</p>
            </motion.div>

            <hr className="line2" />

            <motion.div className="clients-list" variants={childVariants}>
              <p className="clients">INTERPRET MEDIA</p>
              <p className="did-what">CONTENT CREATOR (PART-TIME)</p>
              <p className="client-year">2024-2025</p>
            </motion.div>

            <hr className="line2" />

            <motion.div className="clients-list" variants={childVariants}>
              <p className="clients">FIREFLIES AGENCY</p>
              <p className="did-what">CONTENT CREATOR (PART-TIME)</p>
              <p className="client-year">2022-2023</p>
            </motion.div>

            <hr className="line2" />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
