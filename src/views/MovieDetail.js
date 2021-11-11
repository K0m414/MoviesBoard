import React from 'react'
import { useParams } from 'react-router'
// import Card from '../components/Card'

function MovieDetail() {
    const { id } = useParams();
    console.log(id)
    
    return (
        <main>
            <div className="content">
            {/* <Card /> */}
            hgfh
            </div>
            
        </main>
    )
}

export default MovieDetail
