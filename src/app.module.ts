import { Module } from '@nestjs/common';

import { CoffeeModule } from './coffee/coffee.module';
import { UserModule } from './user/user.module';
import { IamModule } from './iam/iam.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [CoffeeModule, UserModule, IamModule, ConfigModule.forRoot()],
})
export class AppModule {}
