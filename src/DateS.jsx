import React from 'react';

let currdate = new Date();
currdate =currdate.getHours();
let greet='';
const cssStyle={};


if(currdate >=1 && currdate<12){
  greet='Good Morning';
  cssStyle.color='cyan';
}else if(currdate >=12 && currdate<19){
  greet='Good Afternoon';
  cssStyle.color='orange';
}else{
  greet='Good Night';
  cssStyle.color='black';
}


const DateS = () =>{
    
return(<>
    <div className="greetDiv">
    <p>Hello, <span style={cssStyle}>{greet}</span></p>
    </div>
    </>)

}

export default DateS;