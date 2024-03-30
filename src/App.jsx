import React, { useState } from "react";
import DropdownMenu from "./components/DropdownMenu";
import ImageDisplay from "./components/ImageDisplay";

const App = () => {
  const [selectedImage, setSelectedImage] = useState(
    "https://previews.123rf.com/images/djvstock/djvstock1606/djvstock160613826/58889973-night-concept-represented-by-moon-cartoon-icon-isolated-and-flat-illustration.jpg"
  );

  const handleOptionSelect = (option) => {
    switch (option) {
      case "140p":
        setSelectedImage(
          "https://previews.123rf.com/images/djvstock/djvstock1606/djvstock160613826/58889973-night-concept-represented-by-moon-cartoon-icon-isolated-and-flat-illustration.jpg"
        );
        break;
      case "480p":
        setSelectedImage("https://illustoon.com/photo/11097.png");
        break;
      case "720p":
        setSelectedImage(
          "https://t4.ftcdn.net/jpg/02/47/97/03/360_F_247970339_jbtcwIwpOsx42GB90mF4r6ZAwiOWmalL.jpg"
        );
        break;
      case "1080p":
        setSelectedImage(
          "https://images.pexels.com/photos/47367/full-moon-moon-bright-sky-47367.jpeg?cs=srgb&dl=pexels-pixabay-47367.jpg&fm=jpg"
        );
        break;
      case "4K":
        setSelectedImage(
          "https://i.pinimg.com/736x/03/54/58/03545836d1e7246f88f8580394eaf6f7.jpg"
        );
        break;
      // Add more cases for each option
      default:
        setSelectedImage(
          "https://previews.123rf.com/images/djvstock/djvstock1606/djvstock160613826/58889973-night-concept-represented-by-moon-cartoon-icon-isolated-and-flat-illustration.jpg"
        );
    }
  };

  const dropdownOptions = ["140p", "480p", "720p", "1080p", "4K"];

  return (
    <div className="app">
      <h1 className="text">
        Wanna see how does moon look like in different resolutions.
      </h1>
      <DropdownMenu
        options={dropdownOptions}
        onOptionSelect={handleOptionSelect}
      />
      <ImageDisplay selectedImage={selectedImage} />
    </div>
  );
};

export default App;
