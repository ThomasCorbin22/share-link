import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default class Search extends React.Component {
    render() {
        return (
            <div id='search' className='row mt-5 px-5'>
                <form className='d-flex align-items-center justify-content-end w-100 position-relative'>
                    <input className='w-25 rounded' type="text" name="search" onChange={this.props.onChange} value={this.props.value} />
                    <FontAwesomeIcon icon={faSearch} id='search-icon' className="position-absolute"/>
                </form>
            </div>
        )
    }
}