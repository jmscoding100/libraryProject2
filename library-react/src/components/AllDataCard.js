import { useState, useEffect} from 'react'
import { Link } from "react-router"

const AllDataCard =(props)=> {

    return (
        <div className="col">
            <div className="figure h-100 data-figure">
                    <Link to={`/${props.table}/${props.name}`}>
                        { props.name } 
                    </Link>
            </div>
        </div>
    )
}

export default AllDataCard