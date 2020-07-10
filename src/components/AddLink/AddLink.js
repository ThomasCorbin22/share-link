import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

export default class AddLink extends React.Component {
    render() {
        const displayTags = this.props.input.tags.map((tag, index) => (
            <label key={index} id={'tag-' + String(index)} className='d-flex justify-content-between'>
                {'Tag: '}
                <input className='rounded w-75' type="text" name='tag' value={tag.name} onChange={this.props.handleForm} />
            </label>
        ));

        return (
            <div>
                <Button className='btn btn-secondary my-3' color="secondary" onClick={this.props.toggle}>Add Link</Button>

                <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.props.toggle}>Add Link</ModalHeader>
                    <form onSubmit={this.handleSubmit}>
                        <ModalBody className='d-flex flex-column justify-content-around'>
                            <label className='d-flex justify-content-between'>
                                {'Name: '}
                                <input className='rounded w-75' type="text" name='name' value={this.props.input.name} onChange={this.props.handleForm} />
                            </label>
                            <label className='d-flex justify-content-between'>
                                {'URL: '}
                                <input className='rounded w-75' type="text" name='url' value={this.props.input.url} onChange={this.props.handleForm} />
                            </label>
                            {displayTags}
                            <Button color="secondary" onClick={this.props.addTag}>Add Tag</Button>
                        </ModalBody>
                        <ModalFooter>
                            <Button type="submit" color="primary" onClick={this.props.submitForm}>Submit</Button>{' '}
                            <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
                        </ModalFooter>
                    </form>
                </Modal>
            </div>
        );
    }
}