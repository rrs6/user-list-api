import { Response, Request, NextFunction } from "express";
import { UserRepository } from "../db/repositories/UserRepository";
import { ClassRepository } from "../db/repositories/ClassRepository"
import createHttpError from "http-errors";
import { User } from "../db/entities/User";

export class Controllers {
    private userRepository: UserRepository;
    private classRepository: ClassRepository;
    constructor() {
        this.userRepository = new UserRepository();
        this.classRepository = new ClassRepository();
    }

    async getUserById(req: Request, res: Response, next: NextFunction) {
        const {id} = req.params;
        try{
            const user = await this.userRepository.findUser(Number(id));
            if(!user)
                throw createHttpError(404, "this user doesn't exist");
            return res.status(200).json(user);
        }catch(err){
            next(err);
        }
    }

    async getAllUsers(req: Request, res: Response, next: NextFunction) {
        const users = await this.userRepository.getAllUsers();
        return res.status(200).json(users);
    }

    async deleteUserById(req: Request, res: Response, next: NextFunction) {
        const {id} = req.params;
        try{
            const user = await this.userRepository.findUser(Number(id));
            if(!user)
                throw createHttpError(404, "this user doesn't exist");
            await this.userRepository.deleteUser(Number(id));
            return res.status(200).json({msg: "user was deleted"});
        }catch(err){
            next(err);
        }
    }

    async editUserInfoById(req: Request, res: Response, next: NextFunction) {
        const {id} = req.params;
        const {name, email} = req.body;
        try {
            const user = await this.userRepository.findUser(Number(id));
            if(!user)
                throw createHttpError(404, "this user doesn't exist");
            await this.userRepository.changeInformations(name, email, Number(id));
            return res.status(200).json({msg: "user information was changed"});
        }catch(err){
            next(err);
        }
    }

    async createUser(req: Request, res: Response, next: NextFunction) {
        const {name, email, classId} = req.body;
        try {
            const class0 = await this.classRepository.findClass(classId);
            if(!class0)
                throw createHttpError(404, "this class doesn't exist");
            await this.userRepository.createUser({name, email, classId} as User)
            return res.status(201).json({msg: "user created"});
        }catch(err){
            next(err);
        }
    }

    async createClass(req: Request, res: Response, next: NextFunction) {
        const {name} = req.body;
        await this.classRepository.createClass(name);
        return res.status(201).json({msg: "class created"});
    }
}