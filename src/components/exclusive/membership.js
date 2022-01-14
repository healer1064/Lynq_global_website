import './membership.css';

const price_data = [
        { id:0, price: "$30.00", per: "per month", save: ""},
        { id:1, price: "$60.00", per: "for 3 months", save: "save 33%"},
        { id:2, price: "$144.00", per: "for 1 year", save: "save 60%"}
      ];
function Membership() {
  return (
    <div className="membership">
      <p className="membership-title">Select your membership</p>
      <div className="membership-content">
        {
          price_data.map((element) => (
            <div className="membership-block" key={element.id}>
              <p className="price">{element.price}</p>
              <p className="per">{element.per}</p>
              {element.save && 
                <div className="save">
                  <div className="save-div"></div>
                  <span className="save-span">{element.save}</span>
                </div>
              }
            </div>
          ))
        }
      </div>
      <p className="cancel">Cancel anytime</p>
    </div>
  );
}

export default Membership;