import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<import("./users.model").User[]>;
    create(user: any): Promise<void>;
    update(user: any): Promise<void>;
}
