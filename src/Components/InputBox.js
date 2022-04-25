import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const InputBox = (props) => {
    const [searchText, setSearchText] = useState('');
    const [numberOfItems, setNumberOfItems] = useState(4);
    function handleText(e) {
        setSearchText(e.target.value);
        //  set data for parent , top class element
        props.setGlobalSearchText(e.target.value);
    }
    function handleCount(e) {
        let val = Math.max(1, e.target.value)

        setNumberOfItems(val)
        props.setGlobalCount(val);
    }
    return (
        <div>
            <Link to="/new"
                className="bg-indigo-500 ring-offset-2 ring-4 hover:bg-blue-700 text-white 
        font-bold py-2 px-4 rounded"
            >New</Link>
            <input className="border rounded py-1 px-1 mx-2 font-bold"
                placeholder='Search Movie Name '
                type="text" value={searchText} onChange={handleText}></input>
            <input
                min="1" max="100"
                type="number" className="border rounded py-1 px-1 mx-2 font-bold" value={numberOfItems} onChange={handleCount} />
        </div>
    )
}

export default InputBox