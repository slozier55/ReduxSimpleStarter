import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';


// youtube API Key
const API_KEY ='AIzaSyD0qbXKjaW0AV58KXnOa4w9Up33j-ThEOQ';
// Download and install npm APIey search.
// npm install --save youtube-api-search


// create a new component.  This componenet should produce some HTML

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };  // initialise state
    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({videos});  // update state
      //console.log(data);
    });
  }
  render() {
    return (
        <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}
// const App = () => {
//     return (
//       <div>
//       <SearchBar />
//     </div>);
// }
// Take this component's generated HTML and put it on the page (in the DOM).
ReactDOM.render(<App />,document.querySelector('.container'));
