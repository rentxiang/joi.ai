const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main(){
    try{
        await db.category.createMany({
            data: [
                {name: "Famous People"},
                {name: "Movies & TV"},
                {name: "Games"},
                {name: "Musicians"},
                {name: "Animals"},
                {name: "Scientists"},
                {name: "Comics"},
                {name: "Philosophy"},

            ]
        })
    } catch (error){
        console.error("Error seeding default categories", error);
    } finally{
        await db.$disconnect();
    }
}

main();