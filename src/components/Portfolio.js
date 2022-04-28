const Portfolio = (props) => {
  return (
    <>
      <div className="portfolio-grid">
        <img src={props.imgSrc} alt="" />
        <div class="portfolio-content">
          <h5>{props.heading}</h5>
          <p>{props.paragraph}</p>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
