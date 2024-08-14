import React, { useState, useEffect, useRef } from 'react';
import '../components/stylecomponents.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import tinycolor from 'tinycolor2';
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';



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

  const sections = [
    { title: 'sample Website', items: ['UserSelectDropdown', 'ThemeToggle', 'NavItemSelector', 'NavBar', 'Hero'] },
    { title: 'TypeScript', items: ['TypeScript Component'] },
    { title: 'JavaScript', items: ['JavaScript Component'] }
  ];

  // Generate Color Variations
  const generateColorVariations = (baseColor, steps = 4) => {
    let variations = [];
    for (let i = 1; i <= steps; i++) {
      variations.push(tinycolor(baseColor).lighten(i * 10).toHexString());
      variations.push(tinycolor(baseColor).darken(i * 10).toHexString());
    }
    return variations;
  };

  let history = useHistory();

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

  const secondDivRef = useRef(null);
  const firstDivRef = useRef(null);

  const handleScrollToSecondDiv = () => {
    if (secondDivRef.current) {
      secondDivRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToFirstDiv = () => {
    if (firstDivRef.current) {
      firstDivRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (

    <>

      <div className="w-full h-full flex flex-col gap-2 items-start justify-start">
        <div className="w-full fixed top-0 mb-[10px] bg-white h-[50px] backdrop-blur-md bg-opacity-20">

        </div>
        <div className="flex flex-row  justify-center w-full scale-[.9] fixed top-[0%] ">
          <div className=" flex flex-col gap-2 items-start justify-start">
            <div className="w-full font-[poppins] text-3xl text-white mt-[5%] ml-[5%]">
              User Select DropDown
            </div>

            <div className="w-full h-auto flex flex-row justify-start scale-[.9]">
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
            </div>

          </div>

          <div className="h-screen flex flex-col gap-[10px] p-4 items-start justify-start">
            {/* Top 50% */}
            <div className="w-full flex h-[50vh] items-start gap-[10px] justify-between flex-row">
              <div className="bg-white px-[30px] py-[30px] flex h-full w-full flex-col justify-between gap-5 items-start rounded-md backdrop-blur-md">
                <h1 className='text-black text-[23px] flex justify-start items-center w-full flex-row gap-[10px]'>
                  <div className="">&#128394;</div>
                  <div className="">Color Picker</div>
                </h1>
                <input
                  type="color"
                  value={baseColor}
                  onChange={handleBaseColorChange}
                  className="mb-4 bg-transparent w-[200px] h-[100px] rounded-md"
                />
                <div className={`mt-4 text-lg font-bold ${colorVariations ? 'block' : 'hidden'}`}>
                  {selectedColor}
                </div>
                <div className={`flex flex-wrap gap-2 mt-4 ${colorVariations ? 'block' : 'hidden'}`}>
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
              <div className="w-[100%] h-[50vh] gap-[30px] border-2 border-white rounded-md px-[30px] flex flex-col items-center justify-start backdrop-blur-md py-[40px] relative">
                <h1 className='text-[30px] w-full justify-between flex'>▶
                  <span className='text-white'>Preview</span>
                </h1>
                <div className="relative inline-block text-left">
                  <button
                    onClick={toggleDropdown}
                    style={{ backgroundColor: selectedColor }}
                    className="inline-flex justify-center w-[200px] px-4 py-2 text-sm font-medium text-white rounded-md hover:bg-slate-700 focus:outline-none transition duration-200 ease-in-out"
                  >
                    Options
                  </button>
                  <div className={`dropdown-menu border backdrop-blur-md ${isOpen ? 'open' : ''}`}>
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

            {/* Bottom 50% */}
            <div className="overflow-x-scroll w-full h-[70vh] relative flex flex-row items-start justify-start gap-2">
              <div className="w-full flex-shrink-0">
                <div ref={firstDivRef} className="w-full h-[40vh] px-[20px] from-transparent border to-slate-800 bg-gradient-to-br flex flex-col justify-between rounded-md">
                  <div className="text-white text-[50px] flex w-full flex-row items-center justify-between">
                    <h2>Usage</h2>
                    <div onClick={handleScrollToSecondDiv}>
                      <FaArrowCircleRight />
                    </div>
                  </div>
                  <p className="text-[22px] font-[100] text-white">
                    You can use Guide To properly understand and use in your project
                  </p>
                  <button className="bg-white px-[80px] rounded-md mb-[20px] text-black text-[23px] py-[15px]">
                    Guide
                  </button>
                </div>
              </div>
              <div ref={secondDivRef} className="w-full h-[40vh] border-2 border-white  bg-transparent flex-shrink-0">
                <h1 className="text-white text-[50px] px-[20px] w-full flex justify-between items-center" >
                  <h2>Related components</h2>
                  <div className="" onClick={handleScrollToFirstDiv}>
                    <FaArrowCircleLeft />
                  </div>
                </h1>
                <div className="flex flex-row gap-[20px] mx-[20px] transition-all">
                  {sections.map((section, index) => (
                    <li>
                      {section.title}
                    </li>
                  ))}

                </div>

              </div>
            </div>
          </div>




        </div>
        <div className="w-full fixed bottom-0   flex items-center justify-evenly h-[80px] backdrop-blur-md text-white text-[23px]">
          <div className='text-[12px] cursor-pointer' > &#8592; Back</div>
          <div>
            <h1 className='font-[200] uppercase text-[18px]'>Novaxa</h1>
          </div>
          <div className='text-[12px]'>Next &#8594;</div>
        </div>

        <ToastContainer />
      </div>


      {showDialog && (
        <div className="fixed top-0 left-0 w-full h-full backdrop-blur-md bg-black bg-opacity-25 flex items-center justify-center z-50">
          <div className="bg-white px-6 py-6 rounded-lg shadow-lg flex flex-col w-[90%] max-w-md">
            <h2 className="text-black font-normal text-[22px] mb-2 font-[poppins]">
              Enter Value for the Option
            </h2>
            <input
              type="text"
              value={popupValue}
              onChange={handleInputChange}
              className="border border-gray-400 text-white p-2 mb-4 rounded-md"
            />
            <div className="flex gap-2 justify-center">
              <button
                onClick={() => setShowDialog(false)}
                className="bg-red-500 text-white w-full px-4 py-2 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-white text-black w-full border border-black px-4 py-2 rounded-md"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

    </>
  );
};

export default UserSelectDropdown;
