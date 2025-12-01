import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router'
// this used for the live version
// import axios from 'axios'

import BookCard from './BookCard'
//this is for the demo
import { mockBooks } from '../mockData'


const AllBooks =(props)=>{

    const [ table, setTable ] = useState(props.table)
    const [ books, setBooks ] = useState([])
    const [ heading, setHeading ] = useState('')

    const params = useParams()

    useEffect(()=> {
        setTable(props.table)
        setHeading(props.table)
    }, [])

/**
 *  this is how you filter through the live version
useEffect(()=> {

    if (table == 'book') {
        const url = `http://localhost:3005/api/${table}`

        axios.get(url).then(res => setBooks(res.data))

    } else {
        setHeading(params.endpoint)
        const url = `http://localhost:3005/api/${table}/${table}/${params.endpoint}`

        axios.get(url).then(res => setBooks(res.data))
    }
}, [])
 */


// this is how you filter through the demo
useEffect(() => {
    if (table === 'book') {
        setHeading('book');
        setBooks(mockBooks);
    } else if (table === 'author') {
        setHeading(params.endpoint);
        setBooks(
        mockBooks.filter(
            (b) =>
            b.author_name &&
            b.author_name.toLowerCase() === String(params.endpoint).toLowerCase()
        )
        );
    } else if (table === 'publishing') {
        setHeading(params.endpoint);
        setBooks(
        mockBooks.filter(
            (b) =>
            b.company_name &&
            b.company_name.toLowerCase() === String(params.endpoint).toLowerCase()
        )
        );
    } else if (table === 'format') {
        setHeading(params.endpoint);
        setBooks(
        mockBooks.filter(
            (b) =>
            b.format &&
            b.format.toLowerCase() === String(params.endpoint).toLowerCase()
        )
        );
    } else if (table === 'genre') {
        setHeading(params.endpoint);
        setBooks(
        mockBooks.filter(
            (b) =>
            b.genre &&
            b.genre.toLowerCase() === String(params.endpoint).toLowerCase()
        )
        );
    }
}, [table, params.endpoint]);


    const cardComponents = books.map(book => {
        return (
            <BookCard
                key={book.book_id}
                id={book.book_id}
                title={book.title}
                copyright_year={book.copyright_year}
                edition={book.edition}
                edition_year={book.edition_year}
                binding={book.binding}
                rating={book.rating}
                laguage={book.laguage}
                num_pages={book.num_pages}
                cover_image={book.cover_image}
                qty={book.qty}
            />
        )
    })

    return (
        <main className="main" id="AllBooksMain">
            <div className="container">
                <h2 className="text-capitalize">Choose your favorite</h2>
                
                {/*uncomment for live version<p className="text-end">
                    <Link to="/addBook">Add a Book </Link>
                </p>*/}
                <section className="row row-cols-1 row-cols-md-4 row-cols-lg-5 g-4">
                    { cardComponents }
                </section> 
            </div>
        </main>
    )
}


export default AllBooks