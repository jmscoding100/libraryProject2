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
                    <div className="col">
                        <h3 className="book-info">Info</h3>
                        <ul className="book-info-list list-group list-group-flush">
                            <li className="list-group-item">Author:</li>
                            <li className="list-group-item">Publisher:</li>
                            <li className="list-group-item">Copyright Year: {book.copyright_year}</li>
                            <li className="list-group-item">Edition: {book.edition}</li>
                            <li className="list-group-item">Edition Year: {book.edition_year}</li>
                            <li className="list-group-item">Format: {}</li>
                            <li className="list-group-item">Binding: {book.binding}</li>
                            <li className="list-group-item">Rating: {book.rating}</li>
                            <li className="list-group-item">Language: {book.language}</li>
                            <li className="list-group-item">Number of Pages: {book.num_pages}</li>
                            <li className="list-group-item">Quantity: {book.qty}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}


export default SingleBook