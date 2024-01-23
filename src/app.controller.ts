// import { Controller, Get } from '@nestjs/common';
// import { AppService } from './app.service';

// @Controller()
// export class AppController {
//   constructor(private readonly appService: AppService) {}

//   @Get()
//   getHello(): string {
//     return this.appService.getHello();
//   }
// }

import { Controller, Delete, Get, Post, Put, Param } from '@nestjs/common';

@Controller('report/:type')
export class AppController {
  @Get()
  getAllReports(@Param('type') simpan: string) {
    console.log('Type Bang : ', simpan);
    return [];
  }

  @Get(':id')
  getReportById() {
    return {};
  }

  @Post()
  createReport() {
    return 'created';
  }

  @Put()
  updateReport() {
    return 'updated';
  }

  @Delete()
  deleteReport() {
    return 'deleted';
  }
}
