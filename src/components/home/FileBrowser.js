import React, {Component} from 'react';
import {Card, Segment, Label} from "semantic-ui-react";
import File from "./sub-components/File";


class FileBrowser extends Component{

    fileList = [
        {
            filename: 'resume.docx',
            created_at: new Date("2019/02/10")
        },
        {
            filename: 'images.zip',
            created_at: new Date("2019/01/22")
        },
        {
            filename: 'source.7z',
            created_at: new Date("2018/12/13")
        },
        {
            filename: 'confidential.txt',
            created_at: new Date("2018/05/19")
        },
        {
            filename: 'err.log',
            created_at: new Date("2019/02/21")
        },
        {
            filename: 'report.pdf',
            created_at: new Date("2019/03/11")
        },
        {
            filename: 'phpStorm.zip',
            created_at: new Date("2019/01/01")
        }
    ];

    handleClick(event){

    }

    render(){

        return(
            <Segment padded>
                <Label attached='top'>Documents</Label>
            <Card.Group  itemsPerRow={4} fluid>
                {
                    this.fileList.map((file)=>{
                        return <File data={file} onClick={} />;
                    })
                }
            </Card.Group>
            </Segment>
        )
    }
}

export default FileBrowser;