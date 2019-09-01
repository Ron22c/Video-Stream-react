import React from 'react'
class VideoDetail extends React.Component{
    render(){
        if (this.props.video == null){
            return(
                <div>Loading...</div>
            )
        }
        return(
            <div>
                <div className="ui embed">
                    <iframe title={this.props.video.snippet.title} src={`https://www.youtube.com/embed/${this.props.video.id.videoId}`} />
                </div>
                <div className="ui segment">
                    <h1>{this.props.video.snippet.title}</h1>
                    <p>{this.props.video.snippet.description}</p>
                </div>
            </div>
        )
    }
}
export default VideoDetail