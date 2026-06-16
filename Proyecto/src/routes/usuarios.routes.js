import { Router } from "express";
const router = Router();
router.get("/", (req, res) => {
    res.json({ msg: "Lista de usuarios" });
});
router.get("/:id", (req, res) => {
    res.json({ msg: "Un usuario" });
});
router.post("/", (req, res) => {
    res.status(201).json({ msg: "Creado" });
});
export default router;
