import _ from 'lodash';
import File from './models/File';

// todo ajaxes

export default class FileCollection{
    static instance = null;
    collection = [
        new File('resume.docx',35467865,'B058FE24DC073999B8B92BE5B0E778AE61422446D7AA09C9C473DA88688FF3FD',new Date('2018-11-30'),10,9),
        new File('images.zip',35467865,'A031FBBB0B18CD1BE1F1D21BF498D4AE847FD6CC340BB7BE99C8B9242005042F',new Date('2018-12-15'),6,6),
        new File('source.7z',35467865,'D2FC8FEA031A6DED2EE723F284B07D6C66E260D0A3E4417630242EA8A21DBA86',new Date('2018-12-19'),7,7),
        new File('confidential.txt',35467865,'C556A88DF20180D374CC4442895946DDF17A5828693362E30667ADD59A38FB81',new Date('2018-12-22'),4,3),
        new File('err.log',35467865,'6494351BD6044E98447F46847B026151892DF6D84E7F7060D192470D6D9A92CE',new Date('2019-02-10'),5,4),
        new File('The Big Bang Theory-Season-12.tar.gz',35467865,'0E8DE89D138333CCEC3531A814DFF42E16708347E5570007D1CCE34D4D8E84B2',new Date('2019-02-16'),20,16),
    ];

    static getInstance(){
        if (FileCollection.instance == null) {
            FileCollection.instance = new FileCollection();
        }
        return this.instance;
    }

    addFile(file) {
        this.collection.push(file);
    }

    removeFile (file) {
        this.collection = _.difference(this.collection,file);
    };

    getFileByName (name) {
        return _.filter(this.collection,{filename:name});
    };

    getFileByHash (hash) {
        return _.filter(this.collection,{hash:hash});
    };

    getFilesInFolderByFolderHash (folderhash) {
        this.collection = [
            new File('confidential.txt',35467865,'C556A88DF20180D374CC4442895946DDF17A5828693362E30667ADD59A38FB81',new Date('2018-12-22'),4,3),
            new File('err.log',35467865,'6494351BD6044E98447F46847B026151892DF6D84E7F7060D192470D6D9A92CE',new Date('2019-02-10'),5,4),
            new File('The Wire Season-5.zip',35467865,'0E8DE89D138333CCEC3531A814DFF42E16708347E5570007D1CCE34D4D8E84B2',new Date('2019-02-16'),20,16),
        ];
        return this.collection;
    };

    getFileCountInFolder () {
        return this.collection.length;
    };
}