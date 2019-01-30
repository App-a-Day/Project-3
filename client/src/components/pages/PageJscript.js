import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import youtube from "../apis/youtube";
import VideoList from "../SearchBar/VideoList";
import VideoDetail from "../SearchBar/VideoDetail";
import "./PageJscript.css";



class PageJscript extends React.Component {
    state = { videos: [], selectedVideo: null };

    componentDidMount() {
        this.onTermSubmit("javascript full course")
    }

    onTermSubmit = async term => {
       const response = await youtube.get("/search", {
            params: {
                q: term + " javascript"
            }
        });
        
        
        this.setState({ 
            videos: response.data.items, 
            selectedVideo: response.data.items[0]
        })
    };

    onVideoSelect = video => {
        this.setState({ selectedVideo: video })
    };

    //save videos to User's profile page
    onSaveClick = () => {
        this.saveVideo();
    };

    render(){
        return (
            <div className="video ui container">
            <SearchBar onFormSubmit={this.onTermSubmit}/>
            <h1 className="scriptTitle"><i className="fas fa-code-branch"></i>Javascript Tutorials</h1>
            <div className="ui grid">
            <div className="ui row">
            <div className="eleven wide column">
            <VideoDetail video={this.state.selectedVideo}/>
            </div>
            <div className="five wide column">
            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
            </div>
            </div>
            </div>
            </div>
        );
    }
}

export default PageJscript;