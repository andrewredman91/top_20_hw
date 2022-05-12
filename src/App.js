// import React from 'react';
// import Top20Container from './containers/top20Container';

// function App() {
//   return (
//     <div className="App">
//       <h1>UK top 20 songs</h1>
//       <Top20Container />
//     </div>
//   );
//   }

// export default App;


import React from "react";

export default class FetchRandomUser extends React.Component {
  state = {
    loading: true,
    title: null,
  }

  async componentDidMount() {
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({title:data.results[0]})
    console.log(data.results[0]);
  }

  render(){
    return (
      <div>
        {this.state.loading || !this.state.title ?
        (<div>{this.state.title}</div>
        ) 
        : (
        <div>
          <div>ddddd</div>
        </div>
        )}
      </div>
    );
  }
}