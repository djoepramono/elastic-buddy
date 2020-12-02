
import express from 'express';

const app = express();
const port = 8080;

app.get( '/', ( req, res ) => {
    res.send( 'Welcome to Elastic Buddy!' );
} );


app.get('search/:title', (req, res) => {
    const searchedTitle = req.params.title;
    res.send(`You are searching for ${searchedTitle}`);
});

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );

