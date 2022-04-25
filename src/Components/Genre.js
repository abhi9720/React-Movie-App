import React, { useState } from 'react'
import { useEffect } from 'react'


const Genre = (props) => {

    const [isloading, setLoading] = useState(true);
    const [content, setContent] = useState([]);

    function sendGenre(e) {
        props.setGlobalGenre(e.target.textContent);

    }

    useEffect(() => {
        (async function () {
            // The Response object, in turn, does not directly contain the actual
            // JSON response body but is instead a representation of the entire HTTP response.
            //So, to extract the JSON body content from the Response object, we use the json() method, which returns a second promise that resolves with the result of parsing the response body text as JSON.
            setLoading(true);
            fetch('https://react-backend101.herokuapp.com/genres').then(res => res.json())
                .then(response => {
                    setContent(response.genres)

                })
                .finally(() => {
                    setLoading(false);

                })
            // response = response.json();



        })()
    }, []);

    return (
        <div className="Genre">
            <div className="mr-6 border-2 w-40 text-center h-10 font-bold cursor-pointer grid  place-content-center"
                onClick={sendGenre}
            >
                All Genre

            </div>
            {isloading ?
                <div className='font-bold'>loading ...</div>

                :

                content.map(function (genre) {
                    return <div key={genre._id}
                        className="mr-6 border-2 w-40 text-center h-10 border-t-0 font-bold  cursor-pointer grid  place-content-center hover:bg-indigo-100"
                        onClick={sendGenre}
                    > {genre.name} </div>
                })
            }

        </div>
    )
}

export default Genre