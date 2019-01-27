var playlist = new Object({ACDC: "Back in Black"})

function updatePlaylist(pList, artistName, songTitle) {
  pList.artistName = songTitle
  return pList
}

function removeFromPlaylist(playList, artistName) {
  delete playList.artistName
  return playList
}