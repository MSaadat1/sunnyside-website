import "./styles.css"

export function Members() {
  return (
    <>
      <div className="member-container">
        <h2>Client testimonials</h2>
        <div className="members-card">
          <div className="card-1">
            <div className="member-1">
              <img className="cards-img" src="./images/image-emily.jpg" alt="" />
            </div>
            <div className="member-info">
              <p>
                We put our trust in Sunnyside and they delivered, making sure
                our needs were met and deadlines were always hit.
              </p>
            </div>
            <div className="member-title">
              <p className="name">Emily R.</p>
              <p className="title">Marketing Director</p>
            </div>
          </div>
          <div className="card-2">
            <div className="member-2">
              <img className="cards-img" src="./images/image-thomas.jpg" alt="" />
            </div>
            <div className="member-info">
              <p>
                Sunnyside’s enthusiasm coupled with their keen interest in our
                brand’s success made it a satisfying and enjoyable experience.
              </p>
            </div>
            <div className="member-title">
              <p className="name">Thomas S. </p>
              <p className="title">Chief Operating Officer</p>
            </div>
          </div>
          <div className="card-3">
            <div className="member-2">
              <img className="cards-img" src="./images/image-jennie.jpg" alt="" />
            </div>
            <div className="member-info">
              <p>
                Incredible end result! Our sales increased over 400% when we
                worked with Sunnyside. Highly recommended!
              </p>
            </div>
            <div className="member-title">
              <p className="name">Jennie F.</p>
              <p className="title">Business Owner</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
