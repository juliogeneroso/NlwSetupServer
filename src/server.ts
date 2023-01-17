// Back-end API Restful

import Fastify from "fastify";
import { PrismaClient } from "@prisma/client";

const app = Fastify()
const prisma = new PrismaClient()

/** Método HTTP: 
 * Get, 
 * Post, 
 * Put, 
 * Patch (Atualizar algo especifico), 
 * Delete */

app.get('/', async () => {
    const habits = await prisma.habit.findMany({
        where:{
            title:{
                startsWith:'Beber'
            }
        }
    })

    return habits
})

app.listen({
    port: 3000
}).then(()=>{
    console.log('HTTP SERVER RUNNING')
})

//SQL Lite é banco local -> npx prisma init --datasource-provider SQLite