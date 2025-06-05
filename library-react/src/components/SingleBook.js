import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

const SingleBook =()=>{


    const [ book, setBook ] = useState({})

    const params = useParams()

    useEffect(()=> {
        const url = `http://localhost:3005/api/book/${params.id}`

        axios.get(url).then(res => {
            setBook(res.data)
        })
    }, [])


    return(
        <main className="single-book" id="SingleBookMain">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="single-book-heading">{book.title}</h2>
                        <img src="https://placehold.co/250x350" alt="placeholder img" className="img-fluid image hero-single-img" />
                    </div>
                </div>
            </div>
        </main>
    )
}


export default SingleBook