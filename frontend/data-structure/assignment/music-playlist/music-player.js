<<<<<<< HEAD
const Song = require("./song");
const Playlist = require("./playlist");

module.exports = class MusicPlayer {
  constructor(playlist) {
    this.playlist = playlist;
  }

  addSong(song) {
    // TODO: answer here
    this.playlist.songs.push(song);
  }

  play() {
    // TODO: answer here
    if (this.playlist.songs.length === 0) {
      return "";
    }
    if (this.playlist.isRepeatable) {
      const Player = this.playlist.songs.shift();
      this.playlist.songs.push(Player);
      return `Now Playing ${Player.singer} - ${Player.title}`;
    } else {
      const Player = this.playlist.songs.shift();
      return `Now Playing ${Player.singer} - ${Player.title}`;
    }
  }
};
=======
const Song = require('./song')
const Playlist = require('./playlist')

module.exports = class MusicPlayer {
    constructor(playlist) {
        this.playlist = playlist
    }

    addSong(song) {
        // TODO: answer here
    }

    play() {
        // TODO: answer here
    }
}
>>>>>>> da2810cc55b37ed159a385aff35ceafadd64d492
