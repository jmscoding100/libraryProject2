import { useState, useEffect } from 'react'

/* 
use for the live version 
import axios from 'axios'
*/

import AllDataCard from './AllDataCard';

//use for the demo
import { mockBooks } from '../mockData';

/**use this for the demo */
const AllData = ({ table, name }) => {
    const [dataArr, setDataArr] = useState([]);

    useEffect(() => {
        let values = [];

        if (table === 'author') {
        const authors = Array.from(
            new Set(
            mockBooks
                .map((b) => b.author_name)
                .filter(Boolean)
            )
        );
        values = authors.map((a) => ({ id: a, name: a }));
        } else if (table === 'publishing') {
        const publishers = Array.from(
            new Set(
            mockBooks
                .map((b) => b.company_name)
                .filter(Boolean)
            )
        );
        values = publishers.map((p) => ({ id: p, name: p }));
        } else if (table === 'format') {
        const formats = Array.from(
            new Set(
            mockBooks
                .map((b) => b.format)
                .filter(Boolean)
            )
        );
        values = formats.map((f) => ({ id: f, name: f }));
        } else if (table === 'genre') {
        const genres = Array.from(
            new Set(
            mockBooks
                .map((b) => b.genre)
                .filter(Boolean)
            )
        );
        values = genres.map((g) => ({ id: g, name: g }));
        }

        setDataArr(values);
    }, [table]);

    const allDataCardComponents = dataArr.map((item) => {
        return (
        <AllDataCard
            key={item.id}
            id={item.id}
            table={table}
            name={item.name}
        />
        );
    });

    return (
        <main className="main" id="alllDataMain">
        <div className="container">
            <h2 className="all-data-heading text-capitalize">All {name}s</h2>
            <div className="row row-cols-1 row-cols-md-3">
            {allDataCardComponents}
            </div>
        </div>
        </main>
    );
};



/**use to load the cards with information
 * 
const AllData =( {table, name} )=> {

    const [ dataArr, setDataArr ] = useState([])


    useEffect(()=> {

        const url = `http://localhost:3005/api/${table}`

        axios.get(url).then(res => setDataArr(res.data))
    }, [table])

    const allDataCardComponents = dataArr.map(item => {
        
        return (
            <AllDataCard 
                key={item.author_id || item.pub_id || item.format_id || item.genre_id}
                id={item.author_id || item.pub_id || item.format_id || item.genre_id}
                table={table} 
                data={item} 
                name={item.author_name || item.company_name || item.format || item.genre} 
            />  
        )
    })


    return (
        <main className="main" id="alllDataMain">
            <div className="container">
                <h2 className="all-data-heading text-capitalize">All {name}s</h2>
                <div className="row row-cols-1 row-cols-md-3">
                    { allDataCardComponents }
                </div>
            </div>
        </main>
    )
}
 * 
 * 
 * 
 */

export default AllData