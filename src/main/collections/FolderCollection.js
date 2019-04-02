import _ from 'lodash';
import Folder from "./models/Folder";


export default class FolderCollection {
    static instance = null;
    collection = [
        new Folder('Documents', new Date('2019-02-26')),
        new Folder('Images', new Date('2019-03-08')),
        new Folder('New Folder', new Date('2018-12-22')),
        new Folder('Songs', new Date('2019-03-31')),
        new Folder('Movies', new Date('2019-02-10'))
    ];

    static getInstance() {
        if (FolderCollection.instance == null) {
            FolderCollection.instance = new FolderCollection();
        }
        return this.instance;
    }

    addFolder(folder) {
        this.collection.push(folder);
    }

    removeFolderByHash(hash) {
        let folder = _.find(this.collection,{hash:hash});
        this.collection = _.without(this.collection, folder);
        return folder;
    }

    getAllFoldersSortedByName() {
        return _.sortBy(this.collection, ['foldername']);
    };

    getFolderByName(name) {
        return _.filter(this.collection, {foldername: name})
    };

    getFolderCount() {
        return this.collection.length;
    };

    getFirstFolder(){
        return this.getAllFoldersSortedByName()[0];
    }
}