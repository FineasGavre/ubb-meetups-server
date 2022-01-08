import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { WsAdapter } from '@nestjs/platform-ws'
import { DatabaseService } from './database/database.service'
import { ValidationPipe } from '@nestjs/common'
import * as morgan from 'morgan'

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        cors: true,
    })

    app.use(morgan('tiny'))

    const databaseService: DatabaseService = app.get(DatabaseService)
    await databaseService.enableShutdownHooks(app)

    app.useGlobalPipes(new ValidationPipe())
    app.useWebSocketAdapter(new WsAdapter(app))
    await app.listen(3030)
}
bootstrap()
