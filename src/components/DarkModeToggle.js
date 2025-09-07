import { useState } from 'react';
import './Nav.css'; 

function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  const toggle = () => {
    setDark(!dark);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <button className="dark-mode-toggle" onClick={toggle}>
      {dark ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}

export default DarkModeToggle;
