const SERVER_URL = "http://www.19chord.com";

var api = {
    getSinger(gender){
        var url = SERVER_URL + "/php/get/getSinger.php?gender=" + gender;
        console.log("fetch url: " + url);
        return fetch(url).then((res)=> res.json());
    }
};


module.exports = api;