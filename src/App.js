import React, {useEffect, useState} from  'react';
import './App.css';
import FilmeDestaque from './componentes/filmeDestaque';
import FilmesLinha from './componentes/filmesLinha';
import Header from './componentes/header';
import Tmdb from './ThemovieDB/Tmdb';


function App() {

  const [movielist, setMovieList] = useState([]);
  const [destaqueData, setDestaquedata] = useState([]);
  

  useEffect(()=>{
    const loadALL = async()=>{
      let list = await Tmdb.getHomeList();
      setMovieList(list);
      
      let originals = list.filter(i=>i.slug === 'originals');
      let randomEscolha = Math.floor(Math.random() * (originals[0].items.results.length -1));
      let escolha = originals[0].items.results[randomEscolha];
      let escolhaInfo = await Tmdb.getMovieInfo(escolha.id, 'tv');
      setDestaquedata(escolhaInfo);
    }
    loadALL()
  },[]);

  return (
    <div className="App">

      <Header/>
      
      {destaqueData && 
        <FilmeDestaque item={destaqueData}/>
}
      <section className="lists">
        {movielist.map((item, key)=>(
          <FilmesLinha key={key} title={item.title} items={item.items}/>
        ))}
      </section>
    </div> 
    
  );
}

export default App;
