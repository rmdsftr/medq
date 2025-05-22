import { Body, Controller, Delete, Param, Patch, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { AdminService} from "./admin.service";
import { FileInterceptor } from "@nestjs/platform-express";
import * as multer from "multer";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { EditAdminDto } from "./dto/edit-admin.dto";


@Controller('admin')
export class AdminController{
    constructor(private readonly adminService : AdminService){}

    @Post('register')
    @UseInterceptors(FileInterceptor('foto', {
        storage: multer.memoryStorage()
    }))
    async create(
        @UploadedFile() file: Express.Multer.File, 
        @Body() body: CreateAdminDto){
        return this.adminService.create(body, file);
    }

    @Patch('edit/:id_rs')
    async statusHospital(
        @Body() body: EditAdminDto, @Param('id_rs') id_rs:string
    ){
        return this.adminService.EditStatus(body, id_rs);
    }

    @Delete('delete/:id_rs')
    async deleteHospital(@Param('id_rs') id_rs:string){
        return this.adminService.Delete(id_rs);
    }
}



