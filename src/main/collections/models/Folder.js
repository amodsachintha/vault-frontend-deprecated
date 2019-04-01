import Logger from '../../logger/Logger';

export default function Folder(foldername, created_at) {
    this.foldername = foldername;
    this.created_at = created_at;
}

Folder.prototype.print = function () {
  Logger.info({
      foldername: this.foldername,
      created_at: this.created_at.toDateString()
  })
};