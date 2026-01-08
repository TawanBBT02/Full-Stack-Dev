class Media {
    constructor(info) {
        this.publshDate = info.publshDate;
        this.name = info.name;
    }
}

class Song extends Media {
    constructor(songdata) {
        super(songdata);
        this.artist = songdata.artist
    }
}

const mySong = new Song({
    artist: "Queen",
    name : "Bohemian Rhapsody",
    publshDate : 1975,
});

console.log(mySong);