import React from "react";
import "../Styles/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../States/StateProvider";
import { getBasketTotal } from "../States/Reducer";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const navigate = useNavigate();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ( {basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      {/* push the user to another page use history */}
      <button onClick={(e) => navigate('/payment')}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;