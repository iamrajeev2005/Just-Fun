import React, { useState } from "react";

const DropdownMenu = ({ options, onOptionSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onOptionSelect(option);
  };

  return (
    <div className="dropdown-menu">
      <ul className="list-container">
        {options.map((option, index) => (
          <li className="list" key={index} onClick={() => handleOptionClick(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
