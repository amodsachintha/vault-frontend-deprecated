import React, {Component} from 'react';
import {List} from "semantic-ui-react";
import Folder from './Folder';

class FolderList extends Component {

    folderDetails = [
        {
            folder_name: 'Documents',
            created_at: new Date("2019/03/25")
        },
        {
            folder_name: 'Images',
            created_at: new Date("2019/02/10")
        },
        {
            folder_name: 'New Folder',
            created_at: new Date("2019/02/02")
        },
        {
            folder_name: 'Songs',
            created_at: new Date("2019/03/31")
        },
        {
            folder_name: 'Movies',
            created_at: new Date("2018/12/12")
        },
    ];

    render() {
        return (
            <List divided relaxed>
                {
                    this.folderDetails.map((item,i)=>{
                        return <Folder data={item} key={i}/>
                    })
                }
            </List>
        );
    }
}


export default FolderList;