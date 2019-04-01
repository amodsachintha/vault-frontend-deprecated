import Logger from '../../logger/Logger';
import md5 from 'crypto-js/md5';

export default function Folder(foldername, created_at) {
    this.foldername = foldername;
    this.hash = md5(`${foldername}-${created_at.toString()}`).toString();
    this.created_at = created_at;
}

Folder.prototype.print = function () {
  Logger.info({
      foldername: this.foldername,
      hash: this.hash,
      created_at: this.created_at.toDateString()
  })
};

Folder.prototype.getName = function () {
  return this.foldername;
};