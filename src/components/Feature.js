const Feature = (props) => {
  return (
    <>
      <div class="feature-content">
        <img src={props.imgSrc} alt="" />
        <h5>{props.heading} </h5>
        <p>{props.paragraph}</p>
      </div>
    </>
  );
};

export default Feature;
