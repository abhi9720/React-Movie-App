import React, { useEffect, useState } from 'react'
import InputBox from './InputBox'
import MoviesTable from './MoviesTable'
import Pagination from './Pagination'

const Movie = (props) => {
    let { cPage, setcPage } = props;
    let [searchText, setSearchText] = React.useState("");
    let [moviesCount, setCount] = React.useState(4);

    //  ************* movie data
    const [content, setContent] = useState([]);
    const [isloading, setloading] = useState(true);
    useEffect(() => {
        (async function () {
            setloading(true)
            fetch('https://react-backend101.herokuapp.com/movies')
                .then(res => res.json())
                .then(response => {

                    setContent(response.movies)
                })
                .finally(() => {
                    setloading(false)
                })
        })()

    }, []);

    // searching and page count
    function setGlobalSearchText(searchText) { // these arguments are coming from child component
        console.log("movies : " + searchText);
        setSearchText(searchText);
        setcPage(1);

    }
    function setGlobalCount(moviesCount) { // these arguments are coming from child component
        console.log("movies : " + moviesCount);
        setCount(moviesCount);
        setcPage(1);
    }


    // *************** Movie table
    let filterContent;
    let totalMovies;
    if (content) {
        filterContent = content;

        //  searching Movie
        if (searchText) {
            filterContent = filterContent.filter(function (movie) {

                return movie.title.trim().toLowerCase().includes(searchText.trim().toLowerCase());
            })

        }

        // genre grouping
        if (props.cGenre) {
            console.log(props.cGenre);
            console.log(filterContent);
            filterContent = filterContent.filter(function (movie) {

                return movie.genre.name.trim() === props.cGenre.trim();
            })
            console.log(filterContent);
        }
        totalMovies = filterContent;
        // **** pagination , if filterContent =  10 movies , we want to show 3(movie count) movies on 1 page , total 4 page
        //  if cpage =  2, then we have 3 ,4, 5 number of movie
        //  movie count =  3
        let startIndex = (cPage - 1) * moviesCount;
        let endIndex = startIndex + moviesCount;

        filterContent = filterContent.slice(startIndex, endIndex);


    }

    return (
        <div>
            <InputBox
                setGlobalSearchText
                ={setGlobalSearchText}
                setGlobalCount
                ={setGlobalCount}
            />
            <MoviesTable
                searchText={searchText}
                cGenre={props.cGenre}
                cPage={cPage}
                isloading={isloading}
                content={content}
                setContent={setContent}
                filterContent={filterContent}
            />
            <Pagination
                moviesCount={moviesCount}
                totalMovies={totalMovies}
                cPage={cPage}
                setcPage={setcPage}
            />
        </div>
    )
}

export default Movie