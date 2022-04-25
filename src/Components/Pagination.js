import React from 'react'

const Pagination = (props) => {

    const { moviesCount, totalMovies, cPage, setcPage } = props
    let pages = []
    if (totalMovies) {
        let noOfPages = Math.ceil(totalMovies.length / moviesCount);
        for (let i = 1; i <= noOfPages; i++) {
            pages.push(i)
        }
    }

    return (
        <div className='mt-5'>
            {
                pages.map((idx) => {
                    let css = (cPage === idx) ?
                        'h-10 mx-2 px-6 font-semibold rounded-md bg-indigo-400 text-white' :
                        'h-10 mx-2 px-6 font-semibold rounded-md border border-white-200 text-slate-500'
                    return <button className={css}
                        onClick={() => {
                            setcPage(idx)
                        }}
                    >{idx}</button>
                })

            }


        </div>
    )

}

export default Pagination