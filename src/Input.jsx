import React, {useEffect, useState} from 'react'


function Input ({postcode, setPostcode, clicked, setClicked}) {
  
    const handleChange = (event) => {
        setPostcode(event.target.value);
       
    };
console.log(postcode)
    const handleSubmit = (event) => {
        event.preventDefault();
        setClicked(true)
    };

 
   
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Enter the first 2 index of your postcode</label>
                    <input type="text" onChange={handleChange} value={postcode} />
                    <button type="submit"> search</button>
                </form>
            </div>
        )
    }

export default Input