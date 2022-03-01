import React, { useState } from 'react'
import './App.css'

const morseCode : {[key:string]:string}={
    'A':"・ー",
    'B':"ー・・・",
    'C':"ー・－・－",
    'D':"ー・・",
    'E':"・",
    'F':"・・－・",
    'G':"ー－・",
    'H':"・・・・",
    'I':"・・",
    'J':"・－－－",
    'K':"ー・－",
    'L':"・－・・",
    'M':"ー－",
    'N':"ー・",
    'O':"ー－－",
    'P':"・－－・",
    'Q':"ー－・－",
    'R':"・－・",
    'S':"・・・",
    'T':"ー",
    'U':"・・－",
    'V':"・・・－",
    'W':"・－－",
    'X':"ー・・－",
    'Y':"ー・－－",
    'Z':"ー－・・",
    '1':"・－－－－",
    '2':"・・－－－",
    '3':"・・・－－",
    '4':"・・・・－",
    '5':"・・・・・",
    '6':"ー・・・・",
    '7':"ー－・・・",
    '8':"ー－－・・",
    '9':"ー－－－・",
    '0':"ー－－－ー",
    '.':"・－・－・－",
    ',':"ー－・・－－",
    ':':"ー－－・・・",
    '?':"・・ー－・・",
    '`':"・ー－－－・",
    'ー':"ー・・・・ー",
    '(':"ー・ー－・",
    ')':"ー・－－・－"
}

const leetCode:{[key:string]:string}={
    'A':"4",
    'B':"8",
    'C':"(",
    'D':"|)",
    'E':"3",
    'F':"|=",
    'G':"6",
    'H':"#",
    'I':"!",
    'J':"_|",
    'K':"|<",
    'L':"1",
    'M':"AA",
    'N':"И",
    'O':"0",
    'P':"|*",
    'Q':"<|",
    'R':"|2",
    'S':"5",
    'T':"7",
    'U':"|_|",
    'V':"|/",
    'W':"ω",
    'X':"><",
    'Y':"￥",
    'Z':"%"
}

function convertMorse(text:string){
    text=text.toUpperCase();
    let morse:string='';
    [...text].forEach((character:string)=>{
        morse+=morseCode[character]+'  ';
    })
    console.log(morse);
    return morse;
}

function convertLeet(text:string){
    text=text.toUpperCase();
    let leet:string='';
    [...text].forEach((character:string)=>{
        let converted=leetCode[character];
        leet+=(converted===undefined?character:converted);
    })
    console.log(leet);
    return leet;
}

function App() {
    const [text1,setText1]=useState('');
    const [morse,setMorse]=useState('');
    const [text2,setText2]=useState('');
    const [leet,setLeet]=useState('');

    const handleOnMorse=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setText1(e.target.value);
        setMorse(convertMorse(e.target.value));
    }

    const handleOnLeet=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setText2(e.target.value);
        setLeet(convertLeet(e.target.value));
    }

  return (
    <div className="App">
        <h1>英語＝＞モールス</h1>
        <input type="text" onChange={(e)=>handleOnMorse(e)} />
        <p>{text1}</p>
        <p>{morse}</p>
        <h1>英文字列＝＞Leet表記</h1>
        <input type="text" onChange={(e)=>handleOnLeet(e)} />
        <p>{text2}</p>
        <p>{leet}</p>
    </div>
  )
}

export default App