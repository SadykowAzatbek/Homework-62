const About = () => {
  return (
    <>
      <div>
        <h3 className="text-success text-center mt-3">About us</h3>
        <p>
          The sun was setting over the horizon, casting a warm glow across the sky. As the day
          came to an end, the sounds of nature filled the air, from the chirping of birds to the
          rustling of leaves in the gentle breeze. It was a peaceful scene, one that made you want
          to pause and take it all in. The colors of the sky shifted from orange to pink to purple,
          creating a mesmerizing display that seemed to stretch on for miles. In that moment, everything
          felt right in the world. The worries and stresses of the day melted away, leaving only a sense
          of calm and contentment. It was a reminder of the beauty that surrounds us, even in the midst of chaos.
        </p>
        <p>
          As the last rays of sunlight disappeared, the stars began to emerge, twinkling in the darkening sky.
          It was a perfect ending to a perfect day, and it filled you with gratitude for the simple pleasures
          in life. In that moment, you felt a deep connection to the world around you, and a sense of awe at
          the wonders of nature. And as you turned to head back home, you carried that feeling with you, knowing
          that you would always have moments like these to look forward to.
        </p>
      </div>
      <div className="d-flex gap-3">
        <div className="card text-white bg-success mb-3">
          <div className="card-header">Bagel</div>
          <div className="card-body">
            <h5 className="card-title">air bagel with milk</h5>
            <p className="card-text">
              It was a perfect ending to a perfect day,
              and it filled you with gratitude for the simple pleasures in life.
            </p>
          </div>
        </div>
        <div className="card text-white bg-secondary mb-3">
          <div className="card-header">Bread</div>
          <div className="card-body">
            <h5 className="card-title">regular bread</h5>
            <p className="card-text">
              It was a peaceful scene, one that made you want
              to pause and take it all in. The colors of the sky shifted from orange to pink to purple,
              creating a mesmerizing display that seemed to stretch on for miles.
            </p>
          </div>
        </div>
        <div className="card text-white bg-secondary mb-3">
          <div className="card-header">Bagel in cream</div>
          <div className="card-body">
            <h5 className="card-title">so very delicios</h5>
            <p className="card-text">
              In that moment, everything
              felt right in the world. The worries and stresses of the day melted away, leaving only a sense
              of calm and contentment. It was a reminder of the beauty that surrounds us, even in the midst of chaos.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;