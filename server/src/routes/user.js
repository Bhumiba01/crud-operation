import express from "express";
import { getUsers , getUser,deleteUser ,createUser,updateUser} from "../controllers/UserController.js";
const router = express.Router();

//creating new record
router.post("/create",createUser);
//update record
router.put("/updatedata/:id",updateUser);
//get all records
router.get("/",getUsers);
//delete record
router.delete("/delete/:id",deleteUser);
router.get("/getdata/:id",getUser);
export default router;