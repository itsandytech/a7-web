import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TransacoesModule } from './transacoes/transacoes.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://andrealopesanis_db_user:N2QxvJRL1hUrd8iv@cluster0.3fxqs8y.mongodb.net/',
    ),
    TransacoesModule,
  ],
})
export class AppModule {}