import Navbar from "../components/navbar";
// import '../App.css';

export default function About() {
  return (
    <>
      <Navbar />
      <div id="aboutSec" className="App">
        <br></br>
        <h1>About Us</h1>
        <br></br>
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
                <br></br>
                <i>Came up with the concept for the application and created the prototype for the app before implementing pocketbase</i>
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
              <br></br>
                <i>Implemented pocketbase with the project for user authentication and account creation.  </i>
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
              <br></br>
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
              <br></br>
                <i>I helped with the about page and the video presentation. Also added home button on the nav bar</i>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}
