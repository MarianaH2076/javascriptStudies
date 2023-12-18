import express, { Router, Request, Response } from 'express';
import { UserController } from '../controllers/userControllers';

export const router = Router();

const usercontroller = new UserController();

//Criação de endpoints
router.post('/', usercontroller.createUser); //OK!
// router.post("/", createClient.handle);
router.get('/', usercontroller.getAllUsers); //OK!
router.get('/:id', usercontroller.getUserById); //OK
router.patch('/:id', usercontroller.updateUser);//A FAZER
router.delete('/:id', usercontroller.deleteUser);//OK