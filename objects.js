var playlist = new Object({ACDC: "Back in Black"})

function updatePlaylist(playList, artistName, songTitle) {
  playList[artistName] = songTitle
  return playList
}

function removeFromPlaylist(playlist, aName) {
  delete playlist.aName
  return playlist
}