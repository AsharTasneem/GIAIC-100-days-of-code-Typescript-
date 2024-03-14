// Album: Create objects for music albums.
let musicAlbums = (artist : string , title : string , relaseDate : number , numberOfSongs? : number ) => {
    let album  = [artist , title , relaseDate];
    if (numberOfSongs) {
        album.push(numberOfSongs);
        return (`${artist} relased the ${title} album in ${relaseDate}. It consist of ${numberOfSongs} songs.`);
    }
    else {
        return (`${artist} relased the ${title} album in ${relaseDate}.`);
    }
}
console.log(musicAlbums("Atif Aslam","Doorie",2006,18));
console.log(musicAlbums("Imagine Dragons","Night Visions",2012));