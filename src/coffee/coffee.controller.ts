import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CoffeeService } from './coffee.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { ApiTags } from '@nestjs/swagger';
import { ActiveUser } from 'src/iam/decorators/active-user.decorator';
import { ActiveUserData } from 'src/iam/interfaces/active-user-data.interface';

@ApiTags('Coffee')
@Controller('coffee')
export class CoffeeController {
  constructor(private readonly coffeeService: CoffeeService) {}

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeeService.create(createCoffeeDto);
  }

  @Get()
  findAll(@ActiveUser() user: ActiveUserData) {
    return this.coffeeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffeeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeeService.update(+id, updateCoffeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeeService.remove(+id);
  }
}
