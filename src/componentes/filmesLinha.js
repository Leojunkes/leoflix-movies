import React from 'react';
import './filmesLinha.css';
export default function FilmesLinha({title, items}) {
    return(
        
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--listarea" >
                <div className="movieRow--list">
                    {items.results.length > 0 && items.results.map((item, key)=>(
                       <div key={key} className="movieRow--item">
                           <a href={item.homepage}>
                            <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}` } alt={item.original_title}/>
                            </a>
                       </div>
                    ))}
                    </div>

               
                
            </div>
        </div>

    )
}