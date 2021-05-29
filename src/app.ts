import {IPlayer} from "./i-player";

require('custom-env').env('dev')

import {sqlDb} from "./sql-db";
import {player} from "./player";
import {IncomingMessage, ServerResponse} from "http";
const http = require('http');

const hostname = '127.0.0.1';
const port = 3333;

const server = http.createServer(async (req: IncomingMessage, res: ServerResponse) => {
    try {
        await sqlDb.authenticate()
        console.log('Google Cloud SQL connected success')
        await sqlDb.sync({alter : true})
        // const result = await player.create({ // create new row
        //     id: 1,
        //     name: 'Cheng',
        //     age: 24
        // })
        const result = await player.findByPk(1) // get the row
        if (result) {
            result.set('rating', 4.5) // update the row
            const temp = await result.save()
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end(JSON.stringify(temp));
        }
    } catch (e) {
        console.error(e)
        res.statusCode = 500
        res.setHeader('Content-Type', 'text/plain');
        res.end('Failed');
    }
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})