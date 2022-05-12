// import React from 'react';

// const Top20Selector = ({songs, onSongSelected}) => {

//     const handleChange = function(event) {
//         const chosenSong = songs[event.target.value];
//         onSongSelected(chosenSong);
//     }
    
//     const songOptions = songs.map((songs, index) => {
//       return <option value={index} key={index}>{songs.label}</option>
//     })

//     return (
//         <select defaultValue="" onChange={handleChange}>
//             <option value="" selected>Choose a Song</option>
//             {songOptions}
//         </select>
//     )
// }

// export default Top20Selector;