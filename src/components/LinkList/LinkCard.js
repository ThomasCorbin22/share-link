import React from 'react'

export default class LinkCard extends React.Component {
    render(){
        return (
            <div className='link-card rounded p-3 m-2'>
                <h5 className='color-white mb-3'>{this.props.name}</h5>
                <a href={this.props.url} rel="noopener noreferrer" target="_blank"><p className='link-url color-grey mb-1'>{this.props.url}</p></a>
                <p className='color-grey mb-0'>{this.props.tags}</p>
            </div>
        )
    }
}