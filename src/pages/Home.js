import React from 'react';
import {
    Grid,
    Header,
    Progress,
    Segment
} from 'semantic-ui-react';
import UserProfile from '../components/home/UserProfile';
import FolderBrowser from '../components/home/FolderBrowser';
import FileBrowser from '../components/home/FileBrowser';
import FileStats from "../components/home/FileStats";
import Dropzone from "../components/home/DropZone"
import FolderCollection from "../main/collections/FolderCollection";

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fileIsSelected: false,
            file: {
                file_name: '',
                file_created_at: ''
            },
            currentFolder: undefined,
            currentFolderHash: undefined
        };

        this.handleFileClick = this.handleFileClick.bind(this);
        this.getFolderOnClick = this.getFolderOnClick.bind(this);
    }

    handleFileClick(data) {
        this.setState({
            fileIsSelected: true,
            file: {
                file_name: data.filename,
                file_created_at: data.created_at,
                health: Math.round(data.a_fragements/data.t_fragments / 100)
            }
        });
    }

    getFolderOnClick(folder){
        this.setState({
            currentFolder: folder.foldername,
            currentFolderHash: folder.hash
        });
    };

    render() {
        const CardMargin = {
            marginTop: 15
        };

        return (
            <Grid>
                <Grid.Row columns='equal'>
                    <Grid.Column>
                        <Grid.Row columns={1}>
                            <Grid.Column><UserProfile/></Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={1} style={CardMargin}>
                            <Grid.Column>
                                <FolderBrowser handleFolderClick={this.getFolderOnClick}/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid.Column>

                    <Grid.Column width={10}>
                        <FileBrowser
                            fileClickHandler={this.handleFileClick}
                            folderHash={
                                this.state.currentFolderHash === undefined ?
                                FolderCollection.getInstance().getFirstFolder().hash: this.state.currentFolderHash
                            }
                            folderName={
                                this.state.currentFolder === undefined ?
                                    FolderCollection.getInstance().getFirstFolder().foldername : this.state.currentFolder
                            }
                        />
                    </Grid.Column>

                    <Grid.Column>
                        <Segment color='green' raised>
                            <Header as='h5'>Swarm Health</Header>
                            <Progress percent={Math.round(6 / 7 * 100)} progress indicating size='medium'>6/7 Peers
                                online</Progress>
                        </Segment>
                        {this.state.fileIsSelected ? <FileStats data={this.state.file}/> :
                            <Segment raised color='red'>No file selected!</Segment>}
                        <Dropzone classNames='raised'/>
                    </Grid.Column>
                </Grid.Row>


                <Grid.Row>
                    <Grid.Column width={16}>
                        <small>copyright Vault 2019</small>
                    </Grid.Column>
                </Grid.Row>

            </Grid>
        );
    }
}

export default Home;
