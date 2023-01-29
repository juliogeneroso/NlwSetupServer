// Back-end API Restful

import Fastify from "fastify";
import cors from "@fastify/cors";
import { appRoutes } from "./lib/routes";

const app = Fastify()

/** Método HTTP: 
 * Get, 
 * Post 
 * Put, 
 * Patch (Atualizar algo especifico), 
 * Delete */


app.register(cors/* , {
    origin: ['http//localhost:3000']
} */);

app.register(appRoutes);


app.listen({
    port: 3000
}).then(()=>{
    console.log('HTTP SERVER RUNNING')
})

//SQL Lite é banco local -> npx prisma init --datasource-provider SQLite