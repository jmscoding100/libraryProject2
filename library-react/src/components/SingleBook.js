import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
//this is for the live version import axios from 'axios'

//this is for the demo
import { mockBooks } from '../mockData'

const SingleBook =()=>{


    const [ book, setBook ] = useState({})
    

    const params = useParams()

    /**this is how you can view the information on a single book
     * 
    useEffect(()=> {
        const url = `http://localhost:3005/api/book/${params.id}`

        axios.get(url).then(res => {
            setBook(res.data)
        })
    }, [params.id])
     * 
     */


//this is how the demo views information on a single book
useEffect(() => {
    const found = mockBooks.find(
        (b) => String(b.book_id) === String(params.id)
    );
    setBook(found || {});
}, [params.id]);





    return(
        <main className="single-book" id="SingleBookMain">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="single-book-heading">{book.title}</h2>
                        {/* this is for the live version make sure to comment out the image element under this one <img src={`/images/${book.cover_image}`} alt="placeholder img" className="img-fluid image cover-single-img" />*/}

                        <img src="https://placehold.co/200x300" alt="placeholder img" class="img-fluid image" />
                    </div>
                    <div className="col-md-6">
                        <h3 className="book-info">Info</h3>
                        <ul className="book-info-list list-group list-group-flush book-style">
                            <li className="list-group-item">Author: {book.author_name}</li>
                            <li className="list-group-item">Publisher: {book.company_name}</li>
                            <li className="list-group-item">Copyright Year: {book.copyright_year}</li>
                            <li className="list-group-item">Edition: {book.edition}</li>
                            <li className="list-group-item">Edition Year: {book.edition_year}</li>
                            <li className="list-group-item">Format: {book.format}</li>
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