import React, {useEffect, useState} from 'react';
import Card from "./card";

function Home(props) {
    const [maindata, setMaindata] = useState([])
    const fetchdata = async () => {
        await fetch('https://api.tvmaze.com/search/shows?q=all').then((response) => response.json()).then((data) => {
            setMaindata(data)
        })
    }
    useEffect(() => {
        fetchdata()
    }, [])

    return (
        <div className="homemain">
            <div className="cardcontainer">
                {maindata.map((item)=>((item.show.image)?(<div key={item.show.id}><Card name={item.show.name} image={item.show.image.original} summary={item.show.summary} rating={item.show.rating.average} id={item.show.id}/></div>):(<></>)
                ))}
            </div>
        </div>
    );
}

export default Home;