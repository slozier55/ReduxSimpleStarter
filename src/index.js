import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from  './components/video_detail';

// youtube API Key
const API_KEY ='REDACTED';
// Download and install npm APIey search.
// npm install --save youtube-api-search


// create a new component.  This componenet should produce some HTML

class App extends Component {
  constructor(props) {
    super(props);

    // initialise state
    this.state = {
      videos: [],
      selectedVideo: null
     };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });  // update state
      //console.log(data);
    });
  }

  render() {
    return (
        <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect = {selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
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
