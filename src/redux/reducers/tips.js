import { createSlice } from "@reduxjs/toolkit";

const sliceTips = createSlice({
  name: "tips",
  initialState: {
    bill: 0,
    tipAmount: 0,
    tipPercent: 5,
    numberOfPeople: 0,
    totalPerPerson: 0,
    tipSelected: 5,
  },
  reducers: {
    functionSelectTip: (state, action) => {
      state.tipPercent = action.payload;

      state.tipSelected = action.payload;

      console.log("tipSelected", state.tipSelected);
      console.log("tipPercent", state.tipPercent);
    },

    updateBill: (state, action) => {
      state.bill = action.payload;
    },
    updateNumberOfPeople: (state, action) => {
      state.numberOfPeople = action.payload;
    },

    calculateTip: (state, action) => {
      if (state.bill > 0 && state.numberOfPeople > 0) {
        state.tipAmount = (state.bill * state.tipPercent) / 100;
        state.totalPerPerson = state.tipAmount / state.numberOfPeople;
      }

      console.log("totalPerson: " + state.totalPerPerson);
      console.log("tipPercent: " + state.tipPercent);
      console.log("bill: " + state.bill);

      console.log("numberOfPeople: " + state.numberOfPeople);
      console.log("tipAmmount: " + state.tipAmount);
    },
  },
});

export default sliceTips.reducer;

export const {
  functionSelectTip,
  calculateTip,
  updateBill,
  updateNumberOfPeople,
} = sliceTips.actions;

export const tip = (state) => state.tipPercent;
export const selected = (state) => state.tipSelected;
export const totalPerPerson = (state) => state.totalPerPerson;
export const numberOfPeople = (state) => state.numberOfPeople;
export const bill = (state) => state.bill;
export const tipAmmount = (state) => state.tipAmount;
