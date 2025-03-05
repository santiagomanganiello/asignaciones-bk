import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/asignaciones", async (req, res) => {

    const legajo = req.query.legajo as string;

    try {
        const response = await fetch(`http://proveedores.alsea.com.ar:48080/asignaciones-server/mobile/main/asignaciones/legajos/${legajo}`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener mis asignaciones" });
    }
});

app.listen(3001, () => {
    console.log("Servidor iniciado en el puerto 3001");
})