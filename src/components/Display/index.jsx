import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  calculateTip,
  tipAmmount,
  totalPerPerson,
  bill,
  numberOfPeople,
} from "../../redux/reducers/tips";

import "./style.css";

export default function Display(props) {
  const tipAmmountValue = useSelector(tipAmmount);
  const totalPerPersonValue = useSelector(totalPerPerson);

  const billValue = useSelector(bill);
  const numberOfPeopleValue = useSelector(numberOfPeople);

  const dispatch = useDispatch();

  return (
    <div className="display-container">
      <div className="items-container">
        <div className="items">
          <div className="items-desc">
            <h4>Tip Amount</h4>
            <span>/ person</span>
          </div>
          <div className="value">${tipAmmountValue.toFixed(2)}</div>
        </div>
        <div className="items">
          <div className="items-desc">
            <h4>TOTAL</h4>
            <span>/ person</span>
          </div>
          <div className="value">${totalPerPersonValue.toFixed(2)}</div>
        </div>
      </div>
      <button
        onClick={() => dispatch(calculateTip())}
        disabled={billValue == 0 || numberOfPeopleValue == 0 ? true : false}
      >
        CALCULATE
      </button>
    </div>
  );
}
