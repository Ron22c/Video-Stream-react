import React from 'react'
import '../style/Videos.css'
class Videos extends React.Component{
    constructor(){
        super()
        this.videoref = React.createRef()
        this.selectVid = this.selectVid.bind(this)
        this.state = {url:'', text:''}
    }
    componentDidMount(){
        // console.log(this.videoref)
    }
    selectVid(){
        this.props.selectedVideo(this.props.data)
    }
    render(){
        return(
            <div onClick={this.selectVid} className="videos item">
                <img className="ui image" src={this.props.data.snippet.thumbnails.high.url} alt="hi"/>
                <div className="content">
                <a className="header">{this.props.data.snippet.title}</a>
                </div>
            </div>
        )
    }
}
export default Videos

