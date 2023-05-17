const express = require('express');
const hoteleapi = require('./routes/hotele');
const utilisateurapi = require('./routes/utilisateur');
;

const cors = require('cors')
require('./config/connect');

const app =express();
app.use(express.json());
app.use(cors());
app.use('/hotele' , hoteleapi);

app.use('/utilisateur', utilisateurapi);




app.use('/getimage' , express.static('./image'));



app.listen(3000,()=>{
    console.log('server work');
})