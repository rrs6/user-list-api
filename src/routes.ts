import express from "express";
import { Controllers } from "./controllers";

const router = express.Router();
const controller = new Controllers();

router.get("/user/:id", controller.getUserById.bind(controller) as any); //pegar um usuário em específico.
router.get("/user/", controller.getAllUsers.bind(controller) as any); //pegar todos usuários.
router.delete("/user/:id", controller.deleteUserById.bind(controller) as any); // deletar um usuário em específico.
router.put("/user/:id", controller.editUserInfoById.bind(controller) as any); // editar informações de um usuário.
router.post("/class/new", controller.createClass.bind(controller) as any); // criar uma nova classe para o usuário.
router.post("/user/new", controller.createUser.bind(controller) as any); // criar novo usuário.
router.get("/class", controller.getAllClass.bind(controller) as any);

export default router;