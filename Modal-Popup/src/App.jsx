import React, { useState, useEffect, useCallback } from 'react';
import './App.css';

function App() {
  const [closeOnOutsideClick, setCloseOnOutsideClick] = useState(false);
  const [closeOnEscape, setCloseOnEscape] = useState(false);
  const [showCloseIcon, setShowCloseIcon] = useState(false);
  const [showBackDrop, setShowBackDrop] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShowModal = () => {
    setIsModalOpen(true);
  };

  function closeModal(){
    setIsModalOpen(false);
  }

  const handleOutsideClick = (e) => {
    if (closeOnOutsideClick && e.target.classList.contains('modal-backdrop')) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (closeOnEscape && e.keyCode === 32) {
        closeModal();
      }
    };

    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeOnEscape, isModalOpen, closeModal]);

  return (
    <div className="Container">
      <h1>Modal Popup</h1>
      <div className="checkbox-part">
        <div className="checkbox">
          <label>Close dialog on outside click</label>
          <input
            type="checkbox"
            checked={closeOnOutsideClick}
            onChange={() => setCloseOnOutsideClick(!closeOnOutsideClick)}
          />
        </div>

        <div className="checkbox">
          <label>Close dialog on escape</label>
          <input
            type="checkbox"
            checked={closeOnEscape}
            onChange={() => setCloseOnEscape(!closeOnEscape)}
          />
        </div>

        <div className="checkbox">
          <label>Show close Icon</label>
          <input
            type="checkbox"
            checked={showCloseIcon}
            onChange={() => setShowCloseIcon(!showCloseIcon)}
          />
        </div>

        <div className="checkbox">
          <label>Show Backdrop</label>
          <input
            type="checkbox"
            checked={showBackDrop}
            onChange={() => setShowBackDrop(!showBackDrop)}
          />
        </div>

        <button onClick={handleShowModal}>Show Modal</button>
      </div>

      {isModalOpen && (
        <div
          className={`modal-container ${showBackDrop ? 'modal-backdrop' : ''}`}
          onClick={handleOutsideClick}
        >
          <div className="modal">
            {showCloseIcon && (
              <button className="close-icon" onClick={closeModal}>
                X
              </button>
            )}
            <h2>Modal Heading</h2>
            <p>Hello, this is modal content</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
