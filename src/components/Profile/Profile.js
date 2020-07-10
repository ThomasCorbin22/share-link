import React from 'react'
import faker from "faker";

export default class Profile extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            image: faker.image.avatar(),
            name: faker.name.findName()
        }
    }
    render() {
        return (
            <div className='d-flex flex-column align-items-center'>
                <img className='mt-5 mb-4 rounded' src={this.state.image} alt="profile" />
                <p className='color-white d-block text-left mb-2'>{this.state.name}<br />{this.props.favourite} fav. links<br />{this.props.shared} shared links</p>
            </div>
        )
    }
}