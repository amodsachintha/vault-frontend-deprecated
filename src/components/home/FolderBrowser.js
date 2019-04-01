import React, {Component} from 'react';
import {Card, Grid, Label} from 'semantic-ui-react';
import FolderList from './sub-components/FolderList'
import NewFolderModal from './sub-components/NewFolderModal';
import FolderCollection from "../../main/collections/FolderCollection";
import {toast} from "react-toastify";

class FolderBrowser extends Component {

    handleCreateNewFolder = (folderName) => {
        FolderCollection.getInstance().addFolder(folderName);
        this.forceUpdate();
    };

    handleDeleteFolder = (folderHash) => {
        if (window.confirm('Are you sure?')) {
            let folder = FolderCollection.getInstance().removeFolderByHash(folderHash);
            this.forceUpdate();
            toast.success(`${folder.getName()} deleted succesfully!`);
        }
    };

    render() {
        return (
            <Card fluid raised>
                <Card.Content>
                    <Label attached='top'>Directories</Label>
                    <Grid>
                        <Grid.Row columns={1}>
                            <Grid.Column>
                                <FolderList
                                    folders={FolderCollection.getInstance().getAllFoldersSortedByName()}
                                    handleDeleteFolder={this.handleDeleteFolder}
                                />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Card.Content>
                <Card.Content extra>
                    <NewFolderModal handleCreateNewFolder={this.handleCreateNewFolder}/>
                </Card.Content>
            </Card>
        );
    }
}

export default FolderBrowser;