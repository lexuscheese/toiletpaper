export default (genre) => {
    return fetch('http://www.19chord.com/php/${genre}')
        .then(response => Promise.all([response, response.json()]))
}