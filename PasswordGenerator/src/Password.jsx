import './Password.css';
import { useState } from 'react';
// import copyImg from './assets/copy-icon-25.png'

function PasswordGenerator(){
    const [password,setPassword]= useState('');
    const [passwordLength, setPasswordLength] = useState(8);
    const [lowercase,setLowerCase] = useState(true);
    const [uppercase,setUpperCase] = useState(true);
    const [numbers,setNumbers] = useState(true);
    const [characters,setCharacters] = useState(true);
    const [copySuccess, setCopySuccess] = useState(false);

    function copyPassword(){
        if(password){
            navigator.clipboard.writeText(password)
            setCopySuccess(true);
            alert("Password is copied");
        }
        else{
            alert("Empty!!!")
        }
    }


    function generatePassword(){
        const LowerCase='abcdefghijlmnopqrstuvwxyz';
        const UpperCase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const Numbers='0123456789';
        const Characters='!@#$%^&*()_+{}|:"<>?-=[];,./';

        
        if (!lowercase && !uppercase && !numbers && !characters) {
            alert("all the checkbox are empty");
        }

        

        let validChars='';
        if(lowercase) validChars += LowerCase;
        if(uppercase) validChars += UpperCase;
        if(numbers)   validChars += Numbers;
        if(characters) validChars += Characters;

        let generatedPassword='';
        if(passwordLength>=8){
        for(let i=0;i<passwordLength;i++){
            const idx = Math.floor(Math.random()*validChars.length);
            generatedPassword += validChars[idx]; 
        }
    }
        else{
            alert('Length out of mentioned range');
        }
        setPassword(generatedPassword);
    };

    function handleLengthChange(e){
        const length=parseInt(e.target.value);
        setPasswordLength(length);
    }

    function handleCheckbox(e) {
        const { name, checked } = e.target;
      
        if (name === 'lowercase') {
          setLowerCase(checked);
        } else if (name === 'uppercase') {
          setUpperCase(checked);
        } else if (name === 'numbers') {
          setNumbers(checked);
        } else if (name === 'characters') {
          setCharacters(checked);
        }
      }
      
    return(
        <>
        <div className='container'>
            <div className='bodyContainer'>
            <h1>Passwod Generator</h1>
            <div className='password-level'>
            <div><strong>Password:</strong><input type="text" value={password && password} placeholder='Create Password'/></div>
           <button id="copyBtn" onClick={copyPassword}>copy</button>
            </div>
            <div className='password-length'>
                <p>Select Password length<strong>(**8-50 characters**)</strong></p>
                <input type="number" value={passwordLength} onChange={handleLengthChange}/>
            </div>
            <div className='checkBox-container'>
                <div className='LowerCase'>
                <input type="checkbox" name="lowercase" checked={lowercase} onChange={handleCheckbox} />
                <label>Include Lower case</label>
                </div>
                <div className='UpperCase'>
                <input type="checkbox" name="uppercase" checked={uppercase} onChange={handleCheckbox} />
                <label>Include Upper case</label>
                </div>
                <div className='Numbers'>
                <input type="checkbox" name="numbers" checked={numbers} onChange={handleCheckbox} />
                <label>Include Numbers</label>
                </div>
                <div className='Characters'>
                <input type="checkbox" name="characters" checked={characters} onChange={handleCheckbox} />
                <label>Include Special Characters</label>
                </div>
            </div>
             <div className='btn-class'>
            <button id='btn' onClick={generatePassword}>Generate Password</button></div>
        </div>
        </div>
        </>
    )
}

export default PasswordGenerator;