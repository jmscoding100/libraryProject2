import { NavLink } from "react-router"

const Nav =()=> {

    return (
        <nav className="nav top-nav justify-content-center justify-content-md-between">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/book">Books</NavLink>
            <NavLink to="/author">Authors</NavLink>
            <NavLink to='/publishing'>Publishing Company</NavLink>
            <NavLink to='/format'>Formats</NavLink>
            <NavLink to='/genre'>Genres</NavLink>
        </nav>
    )
}

export default Nav