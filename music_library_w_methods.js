var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
  printPlaylists: function () {
    for (var playlist in this.playlists) {
      var id = this['playlists'][playlist]['id'];
      var name = this['playlists'][playlist]['name'];
      var tracks = this['playlists'][playlist]['tracks'].length;
      console.log(id + ": " + name + " - " + tracks + " tracks");
    }
  },
  printTracks: function () {
    for (track in this.tracks){
      var id = this["tracks"][track]["id"];
      var name = this["tracks"][track]["name"];
      var artist = this["tracks"][track]["artist"];
      var album = this["tracks"][track]["album"];
      console.log(id + ": " + name + " by " + artist + " (" + album + ")" )
    }
  },
  printPlaylist: function (playlistId) {
    var playlistName = this['playlists'][playlistId]['name'];
    var trackNumber = this['playlists'][playlistId]['tracks'].length;
    console.log(playlistId + ": " + playlistName + " - " + trackNumber + " tracks");
    for (var x = 0; x < trackNumber; x++) {
      var track = this['playlists'][playlistId]['tracks'][x];
      var songId = this['tracks'][track]['id'];
      var songName = this['tracks'][track]['name'];
      var songArtist = this['tracks'][track]['artist'];
      var songAlbum = this['tracks'][track]['album'];
      console.log(songId + ": " + songName + " by " + songArtist + " (" + songAlbum + ")");
    }
  },
  addTrackToPlaylist: function (trackId, playlistId) {
    this['playlists'][playlistId]['tracks'].push(trackId);
  },
  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
  addTrack: function (name, artist, album) {
    var newTrackId = this.uid();
    this['tracks'][newTrackId] = {
      id: newTrackId,
      name: name,
      artist: artist,
      album: album,
    }
  },
  addPlaylist: function (name) {
    var newPlaylistId = this.uid();
    this['playlists'][newPlaylistId] = {
      id: newPlaylistId,
      name: name,
      tracks: [],
    }
  }
}