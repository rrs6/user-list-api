import { Repository } from "typeorm";
import { User }  from "../entities/User";
import { dataSource } from "../connection";

export class UserRepository {
    private userRepo: Repository<User>;

    constructor() {
        this.userRepo = dataSource.getRepository(User);
    }

    async createUser(user: User) {
        let newMember = this.userRepo.create(new User());
        const {name, email, classId} = user;
        newMember = {...newMember, name, classId, email};
        return await this.userRepo.save(newMember);
    }

    async findUser(id: number) {
        const user = await this.userRepo.findOneBy({id});
        return user;
    }

    async deleteUser(id: number) {
        return await this.userRepo.delete({id});
    }

    async changeInformations(name: string, email: string, id: number) {
        const user = await this.userRepo.findOneBy({id}) as User;
        user.name = name ?? user.name;
        user.email = email ?? user.email;
        await this.userRepo.save(user);
    }

    async getAllUsers() {
        return await this.userRepo.find();
    }
}
