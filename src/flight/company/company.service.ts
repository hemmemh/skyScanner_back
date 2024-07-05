import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { companyArray } from 'src/data/dataForDb';
import { Company } from 'src/schemas/Company.schema';
import { Repository } from 'typeorm';

@Injectable()
export class CompanyService {

    constructor(
        @InjectRepository(Company)
        private CompanyRepo: Repository<Company>,
    ){}

   async  createCompany(company:Company){
      try {
        return this.CompanyRepo.save(company)
      } catch (error) {
        return error
      }
    }

    async getAll(): Promise<Company[]> {
        return this.CompanyRepo.find({})
      }  


    async createMany(): Promise<Company[]> {
        const companyes = companyArray
        for(const company of companyes){
           await this.CompanyRepo.save(company);
        }
         return this.getAll()
      }

}
