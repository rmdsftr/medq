import { BadRequestException, Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { selectUser } from "./dto/login-user.dto";
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService{
    constructor(private prisma: PrismaService){}

    getIndex(){
        return 'ini halaman login';
    }

    generateCustomId(): string {
        const date = new Date().toISOString().slice(0, 10).replace(/-/g, ''); 
        const random = Math.random().toString(36).substring(2, 8).toUpperCase(); 
        return `USR-${date}-${random}`;
    }

    async createUser(data: CreateUserDto){
        const hashedpassword = await bcrypt.hash(data.sandi, 10);

        const emailed = await this.prisma.users.findUnique({
            where : { email: data.email}
        })

        if(emailed){
            throw new BadRequestException('Email sudah terdaftar');
        }

        await this.prisma.users.create({
            data: {
                id_user: this.generateCustomId(),
                email: data.email,
                nama: data.nama,
                sandi: hashedpassword,
                gender: data.gender,
                tgl_lahir: new Date(data.tgl_lahir)
            }
        });

        return 'ini halaman dashboard, registrasi berhasil'
    }

    async loginUser(data: selectUser){
        const existUser = await this.prisma.users.findUnique({
            where : {email : data.email}
        })

        if(existUser){
            const pw = await bcrypt.compare(data.sandi, existUser.sandi);

            if(pw){
                return 'halaman dashboard';
            } else {
                throw new BadRequestException('Password yang dimasukkan tidak sesuai');
            }
        } else {
            throw new BadRequestException('Akun tidak ditemukan');
        }
    }
}