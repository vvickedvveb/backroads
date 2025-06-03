export default function Tour({ image, date, title, city, text, price, days }) {
  return (
    <>
      <article className="tour-card">
        <div className="tour-img-container">
          <img src={image} className="tour-img" alt={title} />
          <p className="tour-date">{date}</p>
        </div>
        <div className="tour-info">
          <div className="tour-title">
            <h4>{title}</h4>
          </div>
          <p>{text}</p>
          <div className="tour-footer">
            <p>
              <span>
                <i className="fas fa-map"></i>
              </span>{" "}
              {city}
            </p>
            <p>{days}</p>
            <p>{price}</p>
          </div>
        </div>
      </article>
    </>
  );
}
