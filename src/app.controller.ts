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

import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Param,
  Body,
} from '@nestjs/common';
import { data, ReportType } from './data';
import { v4 as uuid } from 'uuid';

@Controller('report/:type')
export class AppController {
  @Get()
  getAllReports(@Param('type') type: string) {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return data.report.filter((report) => report.type === reportType);
  }

  @Get(':id')
  getReportById(@Param('type') type: string, @Param('id') id: string) {
    return data.report.find(
      (report) => report.type === type && report.id === id,
    );

    // COMBINE FILTER WITH FIND
    // return data.report
    //   .filter((report) => report.type === type)
    //   .find((report) => report.id === id);
  }

  @Post()
  createReport(
    @Body()
    body: {
      amount: number;
      source: string;
    },
    @Param('type') type: string,
  ) {
    const newReport = {
      id: uuid(),
      source: body.source,
      amount: body.amount,
      created_at: new Date(),
      updated_at: new Date(),
      type: type === 'income' ? ReportType.INCOME : ReportType.EXPENSE,
    };
    data.report.push(newReport);
    return newReport;
  }

  @Put(':id')
  updateReport(
    @Body()
    body: {
      amount: number;
      source: string;
    },
    @Param('type') type: string,
    @Param('id') id: string,
  ) {
    const dataTarget = data.report.findIndex(
      (report) => report.type === type && report.id === id,
    );

    const dataTargetUpdated = {
      id: id,
      source: body.source,
      amount: body.amount,
      created_at: new Date(),
      updated_at: new Date(),
      type: type === 'income' ? ReportType.INCOME : ReportType.EXPENSE,
    };

    data.report[dataTarget] = dataTargetUpdated;

    return {
      success: 'Berhasil Update',
      data: data.report[dataTarget],
    };
  }

  @Delete(':id')
  deleteReport(@Param('type') type: string, @Param('id') id: string) {
    const dataTarget = data.report.findIndex(
      (report) => report.type === type && report.id === id,
    );

    console.log('id hapus : ', dataTarget);

    if (dataTarget >= 0) {
      data.report.splice(dataTarget, 1);
    }

    return {
      success: 'Berhasil hapus',
    };
  }
}
