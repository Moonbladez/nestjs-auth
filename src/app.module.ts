import { Module } from '@nestjs/common';

import { CoffeeModule } from './coffee/coffee.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [CoffeeModule, UserModule],
})
export class AppModule {}
