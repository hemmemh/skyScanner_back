import { Body, Controller, Post } from '@nestjs/common';
import { CompanyService } from './company.service';
import { Company } from 'src/schemas/Company.schema';
import { Public } from 'src/auth/guards/JwtGuard';

@Controller('company')
@Public()
export class CompanyController {

    constructor(private companyService: CompanyService) {}


    @Post()
    createCompany(@Body() dto: Company) {
      return this.companyService.createCompany(dto);
    }


    @Post('createMany')
    createMany() {
      return this.companyService.createMany();
    }
}
