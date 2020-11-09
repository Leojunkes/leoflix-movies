import React from 'react';
import './filmeDestaque.css';

export default function FilmeDestaque ({item}){
    console.log(item.homepage);

    let firstDate = new Date (item.first_air_date);
    let genres = [];
    for (let i in item.genres){
        genres.push(item.genres[i].name);
    }
    
    return(
        <section className="destaque" style={{
            backgroundSize:'cover',
            backgroundPosition:'center',
            backgroundImage:`url(https://image.tmdb.org/t/p/original${item.backdrop_path})`

        }}>
            <div className="destaque--vertical">
                <div className="destaque--horizontal">
                    <div className="destaque--name">{item.original_name}</div>
                    <div className="destaque--info">
                        <div className="destaque--points">{item.vote_average} Pontos  </div>
    <div className="destaque--ano"> {firstDate.getFullYear()}</div>
                        <div className="destaque--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !==1 ? 's' : ''}</div>
                        <div className="destaque--description">{item.overview}</div>
                        <div className="destaque--buttons">
                            <a className="assistir--Button" href={item.homepage}>Assistir</a>
                            <a className="lista--Button" href={`/list/add/${item.id}`}>+ Minha lista</a>
                        </div>
    <div className="destaque--genres"><strong>Gêneros:</strong>{genres.join(', ')}</div>
                    </div>
                    

                </div>
            </div>
            
        </section>
    )
}