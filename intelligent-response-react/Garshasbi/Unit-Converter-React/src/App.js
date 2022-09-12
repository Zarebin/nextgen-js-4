import "./App.scss";
import React, { useState } from "react";
import Select from "react-select";
import ConverterInput from "./converterInput.js";
import Measure_List from "./Measure_List.js";

function App() {
  const [selectedMeasure, setSelectedMeasure] = useState(0);
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState("Square meter (m^2)");
  const [currency2, setCurrency2] = useState("Square meter (m^2)");

  const handleChange = (e) => {
    setSelectedMeasure(e.value);
    setAmount1(1);
    setAmount2(1);
    setCurrency1(Measure_List[e.value].unit[0]);
    setCurrency2(Measure_List[e.value].unit[0]);
  };

  // function format(number) {
  //     return number.toFixed(4);
  //   }

  function handleAmount1Change(amount1) {
    let test1 = Measure_List[selectedMeasure].unit.indexOf(currency1);
    let test2 = Measure_List[selectedMeasure].unit.indexOf(currency2);

    setAmount2(
      (amount1 * Measure_List[selectedMeasure].factor[test1]) /
        Measure_List[selectedMeasure].factor[test2]
    );
    setAmount1(amount1);
  }

  function handleCurrency1Change(currency1) {
    let test1 = Measure_List[selectedMeasure].unit.indexOf(currency1);
    let test2 = Measure_List[selectedMeasure].unit.indexOf(currency2);

    setAmount2(
      (amount1 * Measure_List[selectedMeasure].factor[test1]) /
        Measure_List[selectedMeasure].factor[test2]
    );
    setCurrency1(currency1);
  }

  function handleAmount2Change(amount2) {
    let test1 = Measure_List[selectedMeasure].unit.indexOf(currency1);
    let test2 = Measure_List[selectedMeasure].unit.indexOf(currency2);

    setAmount1(
      (amount2 * Measure_List[selectedMeasure].factor[test2]) /
        Measure_List[selectedMeasure].factor[test1]
    );
    setAmount2(amount2);
  }

  function handleCurrency2Change(currency2) {
    let test1 = Measure_List[selectedMeasure].unit.indexOf(currency1);
    let test2 = Measure_List[selectedMeasure].unit.indexOf(currency2);

    setAmount1(
      (amount2 * Measure_List[selectedMeasure].factor[test2]) /
        Measure_List[selectedMeasure].factor[test1]
    );
    setCurrency2(currency2);
  }

  return (
    <div className="main">
      <div className="measure">
        <form>
          <span>
            <Select
              className="select-property form-control"
              value={Measure_List.filter(
                (obj) => obj.value === selectedMeasure
              )}
              options={Measure_List}
              onChange={handleChange}
            />
          </span>
        </form>
      </div>
      <div className="unit">
        <div>
          <ConverterInput
            selectedMeasure={selectedMeasure}
            amount={amount1}
            currency={currency1}
            currencies={Measure_List[selectedMeasure].unit}
            onAmountChange={handleAmount1Change}
            onCurrencyChange={handleCurrency1Change}
          ></ConverterInput>
        </div>

        <div className="converter-equals">
          <p>=</p>
        </div>

        <div>
          <ConverterInput
            selectedMeasure={selectedMeasure}
            amount={amount2}
            currency={currency2}
            currencies={Measure_List[selectedMeasure].unit}
            onAmountChange={handleAmount2Change}
            onCurrencyChange={handleCurrency2Change}
          ></ConverterInput>
        </div>
      </div>
    </div>
  );
}

export default App;
