import { UserService } from "./user.service";
import { UpdateUserDto } from "./dto/update-user.dto";
import { Response } from "express";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(body: any): string;
    findAll(res: Response): Promise<void>;
    findOne(id: string): string;
    update(id: string, updateUserDto: UpdateUserDto): string;
    remove(id: string): string;
}
