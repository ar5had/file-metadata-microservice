var express = require("express")
    , path = require("path")
    , dotenv = require("dotenv")
    , multer = require("multer")
    , favicon = require("serve-favicon")
    , port = process.env.PORT || 8080;

dotenv.load();    
var app = express();

app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.use(express.static(path.join(__dirname, "public")));

app.set("view-engine", "ejs");

app.get('/getmetadata', function(req, res) {
    res.render('pages/getmd.ejs');
});

app.listen(port, function(){
    console.log("App running on port", port);
})