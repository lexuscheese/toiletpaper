const SERVER_URL = "http://www.19chord.com";

var api = {
    getSinger(gender){
        var url = SERVER_URL + "/php/get/getSinger.php?gender=" + gender;
        console.log("fetch url: " + url);
        return fetch(url).then((res)=> res.json());
    },
    getSongH(singer){
        var url = SERVER_URL + "/php/get/getHSong.php?singer_en=" + singer;
        console.log("fetch url: " + url);
        return fetch(url).then((res)=> res.json());
    },
    getSong(singer){
        var url = SERVER_URL + "/php/get/getSong.php?singer_en=" + singer;
        console.log("fetch url: " + url);
        return fetch(url).then((res)=> res.json());
    },
};


module.exports = api;