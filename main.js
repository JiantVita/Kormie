import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
const pepinonuevo = await prisma.pepino.create({
    data:{
        nombre: "pepinisho",
        pais: "chile",
        precio: "200",
        cantidad: "650",
        tipofruta: "verdura",
    },
});
console.log("nuevo pepino creado:  ",pepinonuevo);
const todoslospepinos = await prisma.pepino.findMany();
console.log("todos los pepinos:  ");
console.dir(todoslospepinos, {depth: null});



}

main()
.catch((e) =>{
    console.error(e);
    console.exit(1)
})
.finally(async() => {
    await prisma.$disconnect();
});