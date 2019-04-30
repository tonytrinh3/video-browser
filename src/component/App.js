import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends Component {
  state = { videos: [], selectedVideo: null};


  //to have the website automatically load something...
  componentDidMount(){
    this.onTermSubmit('bts')


  }


  onTermSubmit = async (term) =>{
    console.log(term);
    const response = await youtube.get('./search', {
      params:{
        q: term
      }

    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  //call back function...
  onVideoSelect = (video) =>{
    console.log('From the App!', video);

    this.setState({selectedVideo: video});
  }


  render() {
    return (
      <div className = 'ui container'>
        <SearchBar onFormSubmit = {this.onTermSubmit}/>
        <div className = 'ui grid'>
          <div className = 'ui row'>
            <div className = 'eleven wide column'>
              <VideoDetail video = {this.state.selectedVideo}/>
            </div>

            <div className = "five wide column">
              <VideoList onVideoSelect = {this.onVideoSelect} videos ={this.state.videos}/>
            </div>



          </div>
        </div>



      </div>
    );
  }
}

export default App;
