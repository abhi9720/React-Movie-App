import React from 'react'

const MoviesTable = (props) => {
    const { isloading, content, setContent, filterContent } = props

    function deleteMovie(movieid) {
        let restMovies = content.filter(movie => movie._id != movieid);
        setContent(restMovies)

    }
    return (
        <div>
            {isloading ?
                <div className='font-bold'>Loading ...</div> :
                <table>
                    <thead>
                        <tr>
                            <th className='px-2'>#</th>
                            <th className='px-2'>Title </th>
                            <th className='px-2'>Genre</th>
                            <th className='px-2'>Stock</th>
                            <th className='px-2'>Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filterContent.map(function (movie, idx) {
                            return <tr key={movie._id}>
                                <td className="px-2 text-center">{idx + 1}</td>
                                <td className="px-5 w-fit text-center">{movie.title}</td>
                                <td className="px-4 text-center">{movie.genre.name}</td>
                                <td className="px-2 text-center">{movie.numberInStock}</td>
                                <td className="px-2 text-center">{movie.dailyRentalRate}</td>
                                <td> <button className="bg-red-500 hover:bg-red-700 text-white 
        font-bold py-2 px-4 rounded"  onClick={function () {
                                        deleteMovie(movie._id);
                                    }}>DELETE</button></td>



                            </tr>


                        })
                        }
                    </tbody>
                </table>
            }
        </div >
    )
}

export default MoviesTable