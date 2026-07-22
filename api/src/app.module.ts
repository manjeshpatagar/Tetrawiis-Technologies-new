import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino';
import { validate } from '@/config/environment.validation';
import { AuthModule } from '@/auth/auth.module';
import { UsersModule } from '@/users/users.module';
import { ServicesModule } from '@/services/services.module';
import { SolutionsModule } from '@/solutions/solutions.module';
import { CareersModule } from '@/careers/careers.module';
import { ContactModule } from '@/contact/contact.module';
import { DatabaseModule } from '@/database/database.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, cache: true, validate }),
    LoggerModule.forRoot({
      pinoHttp: {
        level: process.env.LOG_LEVEL ?? 'info',
        transport:
          process.env.NODE_ENV === 'development'
            ? { target: 'pino-pretty' }
            : undefined,
        redact: ['req.headers.authorization'],
      },
    }),
    DatabaseModule,
    AuthModule,
    UsersModule,
    ServicesModule,
    SolutionsModule,
    CareersModule,
    ContactModule,
  ],
})
export class AppModule {}
