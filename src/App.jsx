import Input from "./components/Input";
import "./global.css";

import billIcon from "./assets/icon-dollar.svg";
import Button from "./components/Button";
import Display from "./components/Display";

import {
  bill,
  functionSelectTip,
  numberOfPeople,
  selected,
  updateBill,
  updateNumberOfPeople,
} from "./redux/reducers/tips";
import { useDispatch, useSelector } from "react-redux";

function App() {
  let billValue = useSelector(bill);
  let numberOfPeopleValue = useSelector(numberOfPeople);
  const isSelected = useSelector(selected);

  const dispatch = useDispatch();

  return (
    <>
      <div className="container">
        <div className="left">
          <Input
            label="Bill"
            icon={billIcon}
            onChange={(e) => {
              dispatch(updateBill(e.target.value));
            }}
            placeholder="0.00"
          />
          <div className="tip-container ">
            <span>Select Tip %</span>
            <div className="buttons-tip-container ">
              <Button
                type="button"
                value={"5%"}
                label={5}
                onClick={() => {
                  dispatch(functionSelectTip(5));
                }}
                selected={isSelected == 5 ? true : false}
              />
              <Button
                type="button"
                value={"10%"}
                label={10}
                onClick={() => {
                  dispatch(functionSelectTip(10));
                }}
                selected={isSelected == 10 ? true : false}
              />
              <Button
                type="button"
                value={"15%"}
                label={15}
                onClick={() => {
                  dispatch(functionSelectTip(15));
                }}
                selected={isSelected == 15 ? true : false}
              />
              <Button
                type="button"
                value={"25%"}
                label={25}
                onClick={() => {
                  dispatch(functionSelectTip(25));
                }}
                selected={isSelected == 25 ? true : false}
              />
              <Button
                type="button"
                value={"50%"}
                label={50}
                onClick={() => {
                  dispatch(functionSelectTip(50));
                }}
                selected={isSelected == 50 ? true : false}
              />
              <Button
                type="number"
                placeholder={"Custom"}
                onChange={(e) => {
                  dispatch(functionSelectTip(e.target.value));
                }}
              />
            </div>
          </div>
          <Input
            label="Number of People"
            onChange={(e) => {
              dispatch(updateNumberOfPeople(e.target.value));
            }}
            icon={billIcon}
            placeholder="0"
          />
        </div>
        <div className="right">
          <Display />
        </div>
      </div>
    </>
  );
}

export default App;
