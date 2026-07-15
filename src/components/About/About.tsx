import "./About.css";
import vineyardsImage from "../../assets/images.vineyards.jpg";
import drunkpaImage from "../../assets/images.drunkpa.jpg";

function About() {
  return (
    <section id="about" className="about-section">
      {/* Νέο wrapper - ΑΥΤΟ είναι τώρα ο "γονιός αναφοράς" για το textbox,
          όχι πια ολόκληρο το section */}
      <div className="about-image-wrapper">
        <div className="row g-0">
          <div className="col-6 col-md-6">
            <img
              src={vineyardsImage}
              alt="Greek vineyard landscape at sunrise"
              className="about-image"
            />
          </div>
          <div className="col-6 col-md-6">
            <img
              src={drunkpaImage}
              alt="Traditional Greek tavern scene"
              className="about-image"
            />
          </div>
        </div>

        <div className="about-textbox">
          <h2 className="about-title">OUR STORY</h2>
          <p className="about-paragraph">
            Every great spirit begins with a place.
          </p>
          <p className="about-paragraph">
            {`Nostos Ritual was born from the landscapes
that have shaped Greek life for centuries—sunlit
vineyards, rugged hillsides, olive groves, and tables
where every glass tells a story.`}
          </p>
          <p className="about-paragraph">
            {`Inspired by the timeless art of distillation, we believe
tsipouro is more than a spirit. It's an invitation to slow
down, gather with friends, and celebrate the simple
pleasures that matter most.`}
          </p>
          <p className="about-paragraph">
            {`Made from carefully selected grapes and distilled
with respect for tradition, every bottle reflects purity,
balance, and authenticity.
No unnecessary complexity—only honest craftsmanship
and exceptional character.`}
          </p>
          <p className="about-paragraph">
            {`The name Nostos comes from the ancient Greek word
for return. A return to meaningful moments.
To genuine hospitality. To conversations that last until
sunset. To rituals worth keeping.`}
          </p>
          <p className="about-paragraph">This is not simply a drink.</p>
          <p className="about-paragraph">It's a ritual.</p>
        </div>
        <p className="about-handwritten">
          From vineyard to glass,
          <br />
          every sip is a return
          <br />
          to Greece.
        </p>
      </div>
    </section>
  );
}

export default About;
