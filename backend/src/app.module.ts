import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { HospitalModule } from './hospitals/hospital.module';

@Module({
  imports: [UserModule, AdminModule, HospitalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
