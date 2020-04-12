const express = require('express');
const app = express();
const port = 1234;

app.use('/', express.static('angular/dist/angular'));
app.use('/legacy', express.static('angularjs/src'));

app.listen(port, function () {
  console.log('Example app listening on port ' + port)
});
