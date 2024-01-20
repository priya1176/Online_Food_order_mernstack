import { Link } from "react-scroll";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>The only thing we are serious about is food.</p>
          </div>
          <p className="mid">
          Launched in 2010, Our technology platform connects customers, restaurant partners and delivery partners,
           serving their multiple needs. Customers use our platform to search and discover restaurants, read and
            write customer generated reviews and view and upload photos, order food delivery,and also providing a
             reliable and efficient last mile delivery service. We also operate a one-stop procurement solution,
             which supplies high quality ingredients and kitchen products to restaurant
                partners. We also provide our delivery partners with transparent and flexible earning opportunities.

        </p>
          <Link to={"menu"} spy={true} smooth={true} duration={500}>
            Explore Menu{" "}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
        <div className="banner">
          <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;