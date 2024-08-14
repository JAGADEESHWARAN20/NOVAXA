import React, { useState } from 'react';

const NavItemSelector = ({ items, onSelect }) => {
  const [selectedItem, setSelectedItem] = useState('');

  const handleSelect = (item) => {
    setSelectedItem(item);
    onSelect(item);
  };

  return (
    <div>
      {items.map((item) => (
        <button
          key={item}
          onClick={() => handleSelect(item)}
          className={selectedItem === item ? 'selected' : ''}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default NavItemSelector;
