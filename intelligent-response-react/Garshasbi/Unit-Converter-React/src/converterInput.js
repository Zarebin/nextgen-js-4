import "./converterInput.scss";

function ConverterInput(props) {
  return (
    <div>
      <form className="unitForm">
        <input
          type="number"
          className="inputUnit"
          max={20}
          value={props.amount}
          onChange={(ev) => props.onAmountChange(ev.target.value)}
        />

        <span>
          <select
            className="select-unit"
            value={props.currency}
            onChange={(ev) => props.onCurrencyChange(ev.target.value)}
          >
            {props.currencies.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </span>
      </form>
    </div>
  );
}
export default ConverterInput;
