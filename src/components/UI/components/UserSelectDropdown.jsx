import React, { useState, useEffect } from 'react';
import '../components/stylecomponents.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import tinycolor from 'tinycolor2';

const UserSelectDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [baseColor, setBaseColor] = useState('#FFaa00');
  const [colorVariations, setColorVariations] = useState([]);
  const [selectedColor, setSelectedColor] = useState('');
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [showDialog, setShowDialog] = useState(false);
  const [popupValue, setPopupValue] = useState('');
  const [codeString, setCodeString] = useState('');
  const [selectedCode, setSelectedCode] = useState('jsx');

  // Add Option
  const addOption = () => {
    const newOption = `Option ${options.length + 1}`;
    setOptions([...options, newOption]);
  };

  // Select Option
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowDialog(true);
  };

  // Handle Input Change
  const handleInputChange = (e) => {
    setPopupValue(e.target.value);
  };

  // Save Option
  const handleSave = () => {
    const updatedOptions = options.map((option) =>
      option === selectedOption ? popupValue : option
    );
    setOptions(updatedOptions);
    setShowDialog(false);
  };

  // Handle Base Color Change
  const handleBaseColorChange = (event) => {
    const newColor = event.target.value;
    setBaseColor(newColor);
    setSelectedColor(newColor);
    setColorVariations(generateColorVariations(newColor));
  };

  // Generate Color Variations
  const generateColorVariations = (baseColor, steps = 4) => {
    let variations = [];
    for (let i = 1; i <= steps; i++) {
      variations.push(tinycolor(baseColor).lighten(i * 10).toHexString());
      variations.push(tinycolor(baseColor).darken(i * 10).toHexString());
    }
    return variations;
  };

  // Handle Color Select
  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setColorVariations(generateColorVariations(color));
  };

  // Toggle Dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Copy Code to Clipboard
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(codeString)
      .then(() => {
        toast.success('Code copied to clipboard!');
      })
      .catch((err) => {
        toast.error('Failed to copy code.');
      });
  };

  // Generate Code String for JSX
  useEffect(() => {
    const generatedCode = `
import React, { useState } from 'react';

const DropdownExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState('${selectedColor}');
  const [options, setOptions] = useState(${JSON.stringify(options)});

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    alert(\`You selected: \${option}\`);
  };

  const addOption = () => {
    const newOption = prompt("Enter the new option's name:");
    if (newOption) {
      setOptions([...options, newOption]);
    }
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        style={{ backgroundColor: selectedColor }}
        className="inline-flex justify-center w-[200px] px-4 py-2 text-sm font-medium text-white rounded-md hover:bg-slate-700 focus:outline-none transition duration-200 ease-in-out"
      >
        Options
      </button>
      <div className={\`dropdown-menu \${isOpen ? 'open' : ''}\`}>
        <div className="dropdown-items">
          {options.map((option, index) => (
            <a
              key={index}
              href="#"
              onClick={() => handleOptionSelect(option)}
              className="dropdown-item"
            >
              {option}
            </a>
          ))}
          <a
            href="#"
            onClick={addOption}
            className="dropdown-item text-green-500"
          >
            + Add Option
          </a>
        </div>
      </div>
    </div>
  );
};

export default DropdownExample;
`;
    setCodeString(generatedCode);
  }, [options, selectedColor]);

  const cssString = `
.dropdown-menu {
  position: absolute;
  margin-top: 10px;
  left: 0;
  top: 100%;
  width: 200px;
  height: 0;
  overflow: hidden;
  background-color: transparent;
  color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: height 0.3s ease, opacity 0.3s ease;
  overflow-y: scroll;
}

.dropdown-menu.open {
  height: 180px;
  opacity: 1;
}

.dropdown-items {
  transform: translateY(-20px);
  transition: transform 0.3s ease;
}

.dropdown-menu.open .dropdown-items {
  transform: translateY(30px);
}

.dropdown-item {
  display: block;
  padding: 10px 20px;
  color: #ffffff;
  text-decoration: none;
  transition: background-color 0.2s ease;
}

.dropdown-item:hover {
  background-color: #505050;
}`;

  return (
    <div className="w-full h-full flex flex-col gap-3 items-start justify-start">
      <div className="w-full font-[poppins] text-3xl text-white m-10">
        User Select DropDown
      </div>

      <div className="w-full h-auto flex flex-row justify-start">
        <div className="">
          <div className="relative mx-[30px] bg-transparent h-[40px] w-[800px] flex flex-row items-center justify-between px-[10px] py-[10px] rounded-[10px]">
            <div className="flex space-x-4">
              <button
                onClick={() => setSelectedCode('jsx')}
                className={`px-4 py-2 rounded-md  ${selectedCode === 'jsx' ? 'bg-white text-black' : 'bg-transparent text-white border-2 border-white rounded-md'}`}
              >
                JSX
              </button>
              <button
                onClick={() => setSelectedCode('css')}
                className={`px-4 py-2 rounded-md ${selectedCode === 'css' ? 'bg-white text-black' : 'bg-transparent text-white border-2 border-white rounded-md'}`}
              >
                CSS
              </button>
            </div>
            <div
              className="sticky top-4 right-3 text-white cursor-pointer"
              onClick={copyToClipboard}
            >
              Copy
            </div>
          </div>
          <h1 className="text-white mt-4 ml-[40px]">{selectedCode.toUpperCase()}</h1>
          <div className="scrollable-container  rounded-lg bg-stone-700 px-[10px]">
            <SyntaxHighlighter language="javascript" style={tomorrow}>
              {selectedCode === 'jsx' ? codeString : cssString}
            </SyntaxHighlighter>
          </div>
        </div>

        <div className="h-screen flex flex-row gap-[120px] p-4 items-start justify-start ">

          <div className=" bg-white px-[30px] py-[30px] rounded-md backdrop-blur-md">
            <input
              type="color"
              value={baseColor}
              onChange={handleBaseColorChange}
              className="mb-4 bg-transparent scale-[120%] rounded-md"
            />
            <div className="mt-4 text-lg font-bold">{selectedColor}</div>
            <div className="flex flex-wrap gap-2 mt-4">
              {colorVariations.map((color, index) => (
                <button
                  key={index}
                  style={{ backgroundColor: color }}
                  onClick={() => handleColorSelect(color)}
                  className="w-8 h-8 rounded-full cursor-pointer border-none"
                ></button>
              ))}
            </div>
          </div>





          <div className="w-auto h-[500px] gap-[30px] border-2 border-white rounded-md px-[30px] flex flex-col items-center justify-start backdrop-blur-md py-[40px] relative ">
            <h1 className='text-[80px]'>Preview</h1>
            <div className="relative inline-block text-left ">
              <button
                onClick={toggleDropdown}
                style={{ backgroundColor: selectedColor }}
                className="inline-flex justify-center w-[200px] px-4 py-2 text-sm font-medium text-white rounded-md hover:bg-slate-700 focus:outline-none transition duration-200 ease-in-out"
              >
                Options
              </button>
              <div className={`dropdown-menu border ${isOpen ? 'open' : ''}`}>
                <div className="dropdown-items">
                  {options.map((option, index) => (
                    <a
                      key={index}
                      href="#"
                      onClick={() => handleOptionSelect(option)}
                      className="dropdown-item"
                    >
                      {option}
                    </a>
                  ))}
                  <a
                    href="#"
                    onClick={addOption}
                    className="dropdown-item text-green-500"
                  >
                    + Add Option
                  </a>
                </div>
              </div>
            </div>



          </div>
        </div>
      </div>

      {showDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-black font-bold text-lg mb-2">Enter Value</h2>
            <input
              type="text"
              value={popupValue}
              onChange={handleInputChange}
              className="border border-gray-400 p-2 mb-4 w-full rounded-md"
            />
            <div className="flex justify-end">
              <button
                onClick={() => setShowDialog(false)}
                className="mr-4 bg-red-500 text-white px-4 py-2 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-green-500 text-white px-4 py-2 rounded-md"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default UserSelectDropdown;
