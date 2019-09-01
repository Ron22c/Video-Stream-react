import React from 'react'
class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {input:''}
        this.getSubmit = this.getSubmit.bind(this)
        this.getChange = this.getChange.bind(this)
    }
    getSubmit(event){
        event.preventDefault()
        this.props.onSearch(this.state.input)
    }
    getChange(event){
        this.setState({
            input:event.target.value
        })
    }
    render(){
        return(
            <div style={{top:'10px'}} className = 'ui segment'>
                <form className='ui form' onSubmit = {this.getSubmit}> 
                    <div className='field'>
                        <label className='ui blue ribbon label'>SEARCH VIDEOS</label>
                        <input type='text' value={this.state.input} onChange={this.getChange}/>
                    </div>
                </form>
            </div>
        )
    }
}
export default SearchBar