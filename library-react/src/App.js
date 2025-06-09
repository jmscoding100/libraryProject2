import { useEffect, useState } from "react"
import { Routes, Route } from "react-router"
import axios from "axios"



import Header from "./components/Header"
import Main from "./components/Main"
import AllBooks from "./components/AllBooks"
import SingleBook from "./components/SingleBook"
import AllData from "./components/AllData"
import Footer from "./components/Footer"
import Error from "./components/Error"

const App =()=>{

    const [books, setBooks] = useState([])

    useEffect(()=>{
        const url = 'http://localhost:3005/api/book'

        axios.get(url).then(res => setBooks(res.data))
    }, [])

    return(
        <>
        <Header />
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/book" element={<AllBooks  table='book' />} />
            <Route path="/book/:id" element={<SingleBook />} />

            <Route path="/author" element={<AllData table="author" name="author" />} />
            <Route path="/author/:endpoint" element={<AllBooks table="author" />} />

            <Route path="/publishing" element={<AllData table="publishing" name="publishing" />} />
            <Route path="/publishing/:endpoint" element={<AllBooks table="publishing" />} />

            <Route path="/format" element={<AllData table="format" name="format" />} />
            <Route path="/format/:endpoint" element={<AllBooks table="format" />} />

            <Route path="/genre" element={<AllData table="genre" name="genre" />} />
            <Route path="/genre/:endpoint" element={<AllBooks table="genre" />} />

            <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
        </>
    )
}

export default App