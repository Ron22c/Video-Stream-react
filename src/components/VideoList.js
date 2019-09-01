import React from 'react'
import Videos from './Videos'
class VideoList extends React.Component{
    constructor(props){
        super(props)
        this.showVideos = this.showVideos.bind(this)
    }
    showVideos(data){
        return data.map(video=>{
            // console.log(video.id.videoId)
            return <Videos key={video.id.videoId} data={video} selectedVideo = {this.props.selected}/>
        })
    }
    render(){
        return(
            <div className="ui relaxed divided list">{this.showVideos(this.props.videos)}</div>
        )
    }
}
export default VideoList 