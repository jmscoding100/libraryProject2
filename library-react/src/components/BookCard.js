import { Link } from "react-router"


const BookCard =(props)=> {

    return (
        <div className="col">
            <div className="card h-100 w-100">
                <img src="https://placehold.co/50x50" alt="" className="img-fluid image card-img-top" />
                <section className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    
                </section>
                <footer className="card-footer">
                    <Link to={`/book/${props.id}`}>View more</Link>
                </footer>
            </div>
        </div>
    )
}

export default BookCard