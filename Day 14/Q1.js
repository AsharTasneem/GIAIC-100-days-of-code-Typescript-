// Album: Create objects for music albums.
var musicAlbums = function (artist, title, relaseDate, numberOfSongs) {
    var album = [artist, title, relaseDate];
    if (numberOfSongs) {
        album.push(numberOfSongs);
        return ("".concat(artist, " relased the ").concat(title, " album in ").concat(relaseDate, ". It consist of ").concat(numberOfSongs, " songs."));
    }
    else {
        return ("".concat(artist, " relased the ").concat(title, " album in ").concat(relaseDate, "."));
    }
};
console.log(musicAlbums("Atif Aslam", "Doorie", 2006, 18));
console.log(musicAlbums("Imagine Dragons", "Night Visions", 2012));
