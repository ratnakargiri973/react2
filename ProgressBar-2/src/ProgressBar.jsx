import { useState, useEffect } from 'react';
import './ProgressBar.css';

function ProgressBar() {
    const [progress, setProgress] = useState(0);
    const [status, setStatus] = useState('Loading');
    const [intervalId, setIntervalId] = useState(null);
    const [speed, setSpeed] = useState(250); // Speed in milliseconds

    useEffect(() => {
        return () => clearInterval(intervalId); // Cleanup on unmount
    }, [intervalId]);

    const startProgress = () => {
        if (intervalId) return; // Prevent multiple intervals
        setStatus('Loading');
        const id = setInterval(() => {
            setProgress((prev) => {
                if (prev < 100) {
                    return prev + 1;
                } else {
                    clearInterval(id);
                    setStatus('Complete');
                    return 100;
                }
            });
        }, speed);
        setIntervalId(id);
    };

    const stopProgress = () => {
        clearInterval(intervalId);
        setIntervalId(null);
        setStatus('Stopped');
    };

    const resetProgress = () => {
        clearInterval(intervalId);
        setProgress(0);
        setStatus('Loading');
        setIntervalId(null);
    };

    const handleSpeedChange = (e) => {
        setSpeed(Number(e.target.value));
    };

    return (
        <div className='progressBar'>
            <h1>Progress Bar</h1>
            <div className='progress'>
                <div style={{ width: '100%', backgroundColor: 'grey', borderRadius: '20px' }}>
                    <div
                        style={{
                            width: `${progress}%`,
                            backgroundColor: 'green',
                            borderRadius: '20px',
                            textAlign: 'center',
                            transition: 'width 0.3s ease-in-out',
                        }}
                    >
                        <h2>{progress}%</h2>
                    </div>
                </div>
                <h3>{status}</h3>
            </div>
            <div className='controls'>
                <button onClick={startProgress}>Start</button>
                <button onClick={stopProgress}>Stop</button>
                <button onClick={resetProgress}>Reset</button>
                <div>
                    <label>
                        Speed (ms):
                        <input
                            type='number'
                            value={speed}
                            onChange={handleSpeedChange}
                            min='50'
                        />
                    </label>
                </div>
            </div>
        </div>
    );
}

export default ProgressBar;
