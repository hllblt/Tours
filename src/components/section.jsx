import element from "./data";
const Section = () => {
  return (
    <section className="toursSection">
      <h1>Our Tours</h1>
      {element.map((item) => (
        <div className="tours">
          <img src={item.img} className="tourImg"></img>
          <div className="footer">
            <div className="titleAndPrice">
              <h4 className="title">{item.title}</h4>
              <h4 className="price">{item.price}</h4>
            </div>
            <p className="tourDesc">{item.desc.slice(0,200)}...<button className="readMore">Read More</button></p>
            <button className="notInterested" onClick={console.log(this.className)}>Not Interested</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Section;
