import { Body, Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { selectUser } from "./dto/login-user.dto";

@Controller('auth')
export class AuthController{
    constructor(private readonly AuthService : AuthService){}

    @Get()
    Index(){
        return this.AuthService.getIndex();
    }

    @Post('register')
    async create(@Body() body: CreateUserDto){
        return this.AuthService.createUser(body);
    }

    @Post('login')
    async select(@Body() body: selectUser){
        return this.AuthService.loginUser(body);
    }
}