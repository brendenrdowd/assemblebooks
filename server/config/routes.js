const path=require("path");

module.exports = function (app) {

//routing

app.all('*', (req, res) => {
res.sendFile(path.resolve('index.html'));
})
}