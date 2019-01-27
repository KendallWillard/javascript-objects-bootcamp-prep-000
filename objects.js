var playlist = new Object({ACDC: "Back in Black"})

function updatePlaylist(pList, artistName, songTitle) {
  pList[artistName] = songTitle
  return pList
}

function removeFromPlaylist(pList, artistName) {
  delete pList.artistName
}