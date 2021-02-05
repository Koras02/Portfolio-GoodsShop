import React from 'react';
import '../styles/Description.scss';

export const SubVisualTwo = ({
  title,
  title2,
  title3,
  title4,
  title5,
  title6
}) => {
     return (
        <div className="paybackWrapper" id="payback">
           <h1 className="paubackh1">
           {title} 
           </h1>
           <div className="paybackWrapper2">
           <h1 className="paybackh2">
             {title2}
           </h1>
            <h1 className="paybackh4">
              {title3}    
             </h1>  
            <br />
             <h1 className="paybackh2">
             {title4}
           </h1>
            <h1 className="paybackh4">
              {title5}    
             </h1>  
             <h1 className="paybackh5">
              {title6}    
             </h1>  
           </div>
        </div>
     );
 }


 export default SubVisualTwo;