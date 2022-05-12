// import React, { useState, useEffect } from 'react';
// import SongList from '../components/top20List';
// import SongDetail from '../components/top20Detail';
// import SongSelector from '../components/top20Select';
// import './top20Container.css';

// const Top20Container = () => {
//     const [songs, setSongs] = useState([]);
//     const [selectedSong, setSelectedSong] = useState(null);

//     useEffect(() => {
//       getSongs();
//     }, [])

//     const getSongs = function(){
//         fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
//         .then(res => res.json())
//         // .then(songs => setSongs(songs))
//     }

//     const onSongClick = function(songs){
//         setSelectedSong(songs);
//     }

//     const onSongSelected = function(songs){
//         setSelectedSong(songs);
//     }

//     return (
//         <div className="main-container">
//             <SongList songs={songs} onSongClick={onSongClick} />
//             <SongSelector songs={songs} onSongSelected={onSongSelected} />
//             {selectedSong ? <SongDetail selectedSong={selectedSong} /> : null}
            
//         </div>
//     )
// }

// export default Top20Container;