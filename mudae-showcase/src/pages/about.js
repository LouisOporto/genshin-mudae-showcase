import Navbar from "../components/navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <div id="aboutSec" className="App">
        <h1>About Us</h1>
        <div className="aboutMembers">
          <div className="member">
            <h2>Nathan</h2>
            <figure>
              <img
                className="Icon"
                alt="Stock photo"
                src="https://hypixel.net/attachments/screenshot_2019-12-29-15-15-35-358-jpeg.1458269/"
              />
              <figcaption>
                <i>Text</i>
              </figcaption>
            </figure>
          </div>
          <div className="member">
            <h2>Louis</h2>
            <figure>
              <img
                className="Icon"
                alt="Stock photo"
                src="https://hypixel.net/attachments/screenshot_2019-12-29-15-15-35-358-jpeg.1458269/"
              />
              <figcaption>
                <i>Text</i>
              </figcaption>
            </figure>
          </div>
          <div className="member">
            <h2>Firas</h2>
            <figure>
              <img
                className="Icon"
                alt="Stock photo"
                src="https://hypixel.net/attachments/screenshot_2019-12-29-15-15-35-358-jpeg.1458269/"
              />
              <figcaption>
                <i>Text</i>
              </figcaption>
            </figure>
          </div>
          <div className="member">
            <h2>Randell</h2>
            <figure>
              <img
                className="Icon"
                alt="Stock photo"
                src="https://hypixel.net/attachments/screenshot_2019-12-29-15-15-35-358-jpeg.1458269/"
              />
              <figcaption>
                <i>Text</i>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}
