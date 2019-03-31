import React, {Component} from 'react';
import {Button, Header, Icon, Modal, Form, Label} from 'semantic-ui-react';
import {toast} from "react-toastify";

class NewFolderModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            folderName: '',
            modalOpen: false,
            validName: true,
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleCreateClick = this.handleCreateClick.bind(this);
    }

    handleInput = e => {
        this.setState({
            folderName: e.target.value,
        });
    };

    handleCreateClick = () => {
        // todo ajax to backend
        console.log('New Folder name: ' + this.state.folderName);
        if(this.state.folderName.trim() === ""){
            this.setState({validName:false});
        }else{
            toast.success('Folder created successfully!');
            this.closeModal();
        }
    };

    openModal = () => {
      this.setState({modalOpen:true});
    };

    closeModal = () => {
      this.setState({
          modalOpen:false,
          folderName: '',
          validName: true
      });
    };

    render() {
        return (
            <Modal trigger={<Button onClick={this.openModal} size='tiny' fluid><Icon name='plus'/></Button>} size='small' dimmer='blurring' open={this.state.modalOpen}>
                <Header icon='folder open' content='Create New Folder?'/>
                <Modal.Content>
                    <Form>
                        <Form.Field>
                            <label>Folder name</label>
                            <input onChange={this.handleInput} value={this.state.folderName} autoFocus={true}/>
                            {!this.state.validName ? <Label basic color='red' pointing>Please enter a folder name!</Label>: ''}
                        </Form.Field>
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='green' inverted onClick={this.handleCreateClick}>
                        <Icon name='checkmark'/> Create
                    </Button>
                    <Button color='red' inverted onClick={this.closeModal}>
                        <Icon name='close'/> Cancel
                    </Button>
                </Modal.Actions>
            </Modal>
        );
    }
}

export default NewFolderModal;