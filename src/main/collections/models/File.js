import convert from 'convert-units';
import Logger from '../../logger/Logger';

export default function File(filename, size, hash, created_at, t_fragments, a_fragments) {
    this.filename = filename;
    this.size = size;
    this.hash = hash;
    this.created_at = created_at;
    this.t_fragments = t_fragments;
    this.a_fragements = a_fragments;
}

File.prototype.print = function () {
    Logger.info({
        filename: this.filename,
        size: convert(this.size).from('B').to('MB') + ' MB',
        hash: this.hash,
        created_at: this.created_at.toDateString(),
        health: Math.round((this.a_fragements/this.t_fragments)/100) + '%'
    });
};