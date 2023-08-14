import { Module } from '@nestjs/common';

import { CoffeeModule } from './coffee/coffee.module';
import { UserModule } from './user/user.module';
import { IamModule } from './iam/iam.module';

@Module({
  imports: [CoffeeModule, UserModule, IamModule],
})
export class AppModule {}
