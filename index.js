import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();

const app = express();

app.use(express.json());

app.get("/verduras", async (req, res) => {
    const pepino = await prisma.pepino.findMany();
    res.json({
      success: true,
      payload: pepino,
      message: "Operation Successful",
    });
  });



app.post("/verduras", async (req, res) => {
    const result = await prisma.pepino.create({
      data: req.body,
    });
    res.json(result);
  });

  app.delete(`/verduras/:id`, async (req, res) => {
    const { id } = req.params;
    const pepino = await prisma.pepino.delete({
      where: {
        id: Number(id),
      },
    });
    res.json(`La estudiante con el id ${id} fue eliminada exitosamente`);
  });

  app.put("/verduras/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const datosActualizados = await prisma.pepino.update({
        where: { id: Number(id) },
        // req.body es la info que manda el usuario para actualizar
        data: req.body,
      });
      res.json({
        datos: datosActualizados,
        mensaje: `La estudainte con el id ${id} fue actulizado exitosamente`,
      });
    } catch (e) {
      res.json({ error: `La estudiante con el id ${id} no existe` });
    }
  });

app.use((req, res, next) => {
  res.status(404);
  return res.json({
    success: false,
    payload: null,
    message: `APY SAYS: Endpoint not not found for path: ${req.path}`,
  });
});

app.listen(process.env.PORT || 8001, () =>
  console.log(`🚀 Server ready at: http://localhost:8001`)
);