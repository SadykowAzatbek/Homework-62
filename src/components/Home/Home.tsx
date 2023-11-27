import bakery from '../../assets/bakery.jpg';
const Home = () => {
  return (
    <div className="mt-5 bg-light rounded-3 p-3">
      <h2 className="text-center fs-3">
        The team
        <span className="text-success fs-2"> Travelulu </span>
        local bakery
      </h2>
      <div className="d-flex mt-4">
        <div>
          <p>
            The sun was setting over the horizon, casting a warm glow across the sky. As the day
            came to an end, the sounds of nature filled the air, from the chirping of birds to the
            rustling of leaves in the gentle breeze. It was a peaceful scene, one that made you want
            to pause and take it all in. The colors of the sky shifted from orange to pink to purple,
            creating a mesmerizing display that seemed to stretch on for miles. In that moment,
            everything felt right in the world. The worries and stresses of the day melted away,
            leaving only a sense of calm and contentment.
          </p>
          It was a reminder of the beauty that surrounds
          us, even in the midst of chaos. As the last rays of sunlight disappeared, the stars began to
          emerge, twinkling in the darkening sky. It was a perfect ending to a perfect day, and it
          filled you with gratitude for the simple pleasures in life. In that moment, you felt a
          deep connection to the world around you, and a sense of awe at the wonders of nature.
          And as you turned to head back home, you carried that feeling with you, knowing that
          you would always have moments like these to look forward to.
        </div>
        <div>
          <img src={bakery} alt="bakery" />
        </div>
      </div>
    </div>
  );
};

export default Home;