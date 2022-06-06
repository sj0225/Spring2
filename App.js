import React, { useState } from 'react';
import Data from './Data';
import  Accordion from './Accordion';
const App=()=>{
  const[data,setData]=useState(Data);

return(
<>

<h1>FAQs</h1>
<div className="container">
  <div className="faqsBlock">
    {Data.map((val)=>{
      return(
<>
<Accordion{...val}/>
</>
  )
    })}
    
  </div>

</div>
</>


)

}
export default App;