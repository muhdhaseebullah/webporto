const Services = (props) => {
  return (
    <>
      <div class="my-card">
        <img src={props.imgSrc} alt="" />
        <h1>{props.heading}</h1>
        <p>{props.paragraph}</p>
      </div>
    </>
  );
};

export default Services;
