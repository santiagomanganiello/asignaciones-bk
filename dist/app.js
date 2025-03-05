"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.get("/asignaciones", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const legajo = req.query.legajo;
    try {
        const response = yield fetch(`http://proveedores.alsea.com.ar:48080/asignaciones-server/mobile/main/asignaciones/legajos/${legajo}`);
        const data = yield response.json();
        res.json(data);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener mis asignaciones" });
    }
}));
app.listen(3001, () => {
    console.log("Servidor iniciado en el puerto 3001");
});
