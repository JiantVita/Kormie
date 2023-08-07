-- CreateTable
CREATE TABLE "Pepino" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "pais" TEXT,
    "precio" TEXT,
    "cantidad" TEXT,
    "tipofruta" TEXT,

    CONSTRAINT "Pepino_pkey" PRIMARY KEY ("id")
);
