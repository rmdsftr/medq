import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { DoctorModule } from './doctors/doctors.module';
import { SpesialisModule } from './spesialis/spesialis.module';
import { ProvinsiModule } from './provinsi/provinsi.module';
import { KotaModule } from './kota/kota.module';
import { JadwalModule } from './jadwal/jadwal.module';
import { PraktikModule } from './praktik/praktik.module';
import { HospitalModule } from './hospitals/hospitals.module';
import { DokterModule } from './dokter/dokter.module';

@Module({
  imports: [UserModule, AdminModule, DoctorModule, 
    SpesialisModule, ProvinsiModule, KotaModule, 
    JadwalModule, PraktikModule, HospitalModule, DokterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
