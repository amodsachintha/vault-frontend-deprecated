import _ from 'lodash';
export default function FolderCollection(){
    this.collection = [];
}

// todo add ajax functionality

FolderCollection.prototype.add = function (folder){
    this.collection.push(folder)
};

FolderCollection.prototype.remove = function (folder) {
  this.collection =  _.difference(this.collection,folder);
};

FolderCollection.prototype.getAllFoldersSortedByName = function () {
    return _.sortBy(this.collection,['filename']);
};

FolderCollection.prototype.getFolderByName = function (name) {
    return _.filter(this.collection,{filename:name})
};

FolderCollection.prototype.getCount = function () {
    this.collection.length;
};