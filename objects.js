var playlist = new Object({ACDC: "Back in Black"})

function updatePlaylist(pList, artistName, songTitle) {
  pList[artistName] = songTitle
  return pList
}