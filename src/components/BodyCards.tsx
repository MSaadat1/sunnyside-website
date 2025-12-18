import "./styles.css";

export function BodyCards() {
  return (
    <>
      <div className="cards-container">
        <div className="cards card-one">
          <h2>Transform your brand</h2>
          <p className="card-one-fp">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <p className="card-one-p">LEARN MORE</p>
        </div>
        <div className="cards card-two"></div>
        <div className="cards card-three"></div>
        <div className="cards card-four">
          <h2>Stand out to the right audience</h2>
          <p className="card-four-fp">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <p className="card-four-p">LEARN MORE</p>
        </div>
        <div className="cards card-five">
          <div className="card-five-text">
            <h2>Graphic design</h2>
            <p>
              {" "}
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </p>
          </div>
        </div>
        <div className="cards card-six">
          <div className="card-six-text">
            <h2>Photography</h2>
            <p>
              {" "}
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
