import React, { useState } from 'react';

const CustomHook = (intval,initError) => {
    const [inp, setInput] = useState(intval)
    const [errors, setError] = useState(initError)
console.log("inp",inp);
    const handleChange = (e) => {
        setInput((inp) => ({ ...inp, [e.target.name]: e.target.value }))
        console.log("called handleChange from custom hook",inp);   
        if (e.target.value == "") {
            let SpanId = [e.target.name]+"Error";
            setError({ ...errors,[SpanId]: "This field is required" })
        } else {
            
        }
    }
    const updatedData = (data) => {
        console.log("api response in hook ",data);
        setInput(data)
    }
    return {handleChange,inp,errors,updatedData};
};

export default CustomHook;