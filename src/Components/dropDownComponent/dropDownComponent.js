import { useState } from "react";
import "./dropDownComponent.css";
const DropDownComponent = ({
  options,
  placeholder = "",
  onChange,
  selectedKay,
  open,
  setOpen,
}) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const onItemSelected = (option) => {
    onChange !== undefined && onChange(option.key);
    onChange !== undefined && setInputValue(option.value);
    setOpen(false);
  };
  const onInputClick = () => {
    setOpen((prevValue) => !prevValue);
  };
  const clearDropdown = () => {
    setInputValue("");
    onChange("");
  };
  return (
    <>
      <div className="dropdownContainer">
        <div className="inputContainer" onClick={onInputClick}>
          <input
            type="text"
            value={inputValue}
            placeholder={placeholder}
            onChange={onInputChange}
          />
          <div className="inputArrowContainer">
            <i className="inputArrow" />
          </div>
          {selectedKay || inputValue ? (
            <div
              className="inputClearContainer inputArrowContainer"
              onClick={clearDropdown}
            >
              x
            </div>
          ) : null}
        </div>
        <div className={`dropdown ${open ? "visible" : ""}`}>
          {options.map((opt) => {
            return (
              <div
                key={opt.key}
                onClick={() => {
                  onItemSelected(opt);
                }}
                className="option"
              >
                {opt.value}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default DropDownComponent;
