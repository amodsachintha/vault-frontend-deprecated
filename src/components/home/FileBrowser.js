import React, {Component} from 'react';
import {Card, Segment, Label} from "semantic-ui-react";
import File from "./sub-components/File";
import FileCollection from '../../main/collections/FileCollection';


class FileBrowser extends Component{

    state={
        isLoading:true,
        files: []
    };

    timeout = () => {
        let files;
        setTimeout(()=>{
            files = FileCollection.getInstance().getFilesInFolderByFolderHash(this.props.folderHash);
            this.setState({
                isLoading:false,
                files: files
            });
        },1000);
        return false;
    };

    render(){
        this.timeout();
        let {files} = this.state;

        return(
            <Segment raised padded loading={this.state.isLoading}>
                <Label attached='top'>{this.props.folderName } </Label>

            <Card.Group  itemsPerRow={4}>
                {
                    files.map((file,i)=>{
                        return <File data={file} key={i} viewHandler={this.props.fileClickHandler}/>;
                    })
                }
            </Card.Group>
            </Segment>
        )
    }
}

export default FileBrowser;