import { Module } from '@nestjs/common'
import { ApiModules } from './api'

@Module({
  imports: [
      ...ApiModules
  ],
})
export class AppModule {}
