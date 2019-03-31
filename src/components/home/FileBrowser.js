import React, {Component} from 'react';
import {Card, Segment, Label} from "semantic-ui-react";
import File from "./sub-components/File";


class FileBrowser extends Component{

    fileList = [
        {
            filename: 'resume.docx',
            created_at: new Date("2019/02/10"),
            health:90
        },
        {
            filename: 'images.zip',
            created_at: new Date("2019/01/22"),
            health:100
        },
        {
            filename: 'source.7z',
            created_at: new Date("2018/12/13"),
            health:10
        },
        {
            filename: 'confidential.txt',
            created_at: new Date("2018/05/19"),
            health:100
        },
        {
            filename: 'err.log',
            created_at: new Date("2019/02/21"),
            health:50
        },
        {
            filename: 'report.pdf',
            created_at: new Date("2019/03/11"),
            health:100
        },
        {
            filename: 'phpStorm.zip',
            created_at: new Date("2019/01/01"),
            health:60
        },
        {
            filename: 'The Big Bang Theory-Season-12.tar.gz',
            created_at: new Date("2019/02/09"),
            health:60
        },
        {
            filename: 'The Wire.zip',
            created_at: new Date("2018/11/25"),
            health:60
        }
    ];


    render(){
        return(
            <Segment raised padded>
                <Label attached='top'>Documents</Label>
            <Card.Group  itemsPerRow={4}>
                {
                    this.fileList.map((file,i)=>{
                        return <File data={file} key={i} viewHandler={this.props.fileClickHandler}/>;
                    })
                }
            </Card.Group>
            </Segment>
        )
    }
}

export default FileBrowser;