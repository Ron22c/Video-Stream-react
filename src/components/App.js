import React from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import Youtube from '../apis/youtube'
const KEY='XXXXXXXXXXXXXXXXXXXXXXXXX'
class App extends React.Component{
    constructor(props){
        super(props)
        this.getSearchQuery = this.getSearchQuery.bind(this)
        this.selectedVideo = this.selectedVideo.bind(this)
        this.state = {video:[], selectedVideo:null}
    }
    componentDidMount(){
        this.getSearchQuery('IronMan')
    }
    async getSearchQuery(query){
        console.log(query)
        const response = await Youtube.get('/search',{
            params:{
                part:'snippet',
                maxResults:4,
                key:KEY,
                q: query
            }
        })
        // console.log(response.data.items)
        this.setState({video:response.data.items,selectedVideo:response.data.items[0]})
    }
    selectedVideo(video){
        console.log(video)
        this.setState({selectedVideo:video})
    }
    render(){
        return(
            <div className='ui container'>
                <SearchBar onSearch = {this.getSearchQuery}/>
                <div className="ui grid">
                    <div className ="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList selected={this.selectedVideo} videos={this.state.video}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default App