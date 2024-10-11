import { Repository } from "typeorm";
import { dataSource } from "../connection";
import { Class } from "../entities/Class";

export class ClassRepository {
    private classRepo: Repository<Class>;

    constructor() {
        this.classRepo = dataSource.getRepository(Class);
    }

    async createClass(name: string) {
        let newClass = this.classRepo.create(new Class());
        newClass = {...newClass, name};
        return await this.classRepo.save(newClass);
    }

    async findClass(id: number) {
        const class0 = await this.classRepo.findOneBy({id});
        return class0;
    }

    async getAllClass() {
        const classes = await this.classRepo.find();
        return classes;
    }
}
