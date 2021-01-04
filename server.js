const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendfile('./public/index.html');
});


app.listen((process.env.PORT || 3000), () => {
    console.log("My app listening on port 3000!");
});