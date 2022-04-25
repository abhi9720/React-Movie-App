import React from 'react'
import Genre from './Genre'
import Movie from './Movie'

const Main = () => {
    const [cGenre, setGenre] = React.useState("")
    const [cPage, setcPage] = React.useState(1);
    const setGlobalGenre = (nGenre) => {

        if (nGenre === "All Genre") {
            setGenre("");
        } else {
            setGenre(nGenre);
        }
        setcPage(1);
    }
    return (
        <div className="flex px-5 mt-5">
            <Genre setGlobalGenre={setGlobalGenre} />
            <Movie cGenre={cGenre} cPage={cPage} setcPage={setcPage} />
        </div>
    )
}

export default Main