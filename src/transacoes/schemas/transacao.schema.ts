import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TransacaoDocument = Transacao & Document;

@Schema({ timestamps: true })
export class Transacao {
  @Prop({ required: true })
  descricao: string;

  @Prop({ required: true })
  valor: number;

  @Prop({ required: true, enum: ['receita', 'despesa'] })
  tipo: string;

  @Prop({ required: true })
  categoria: string;

  @Prop({ required: true })
  consumoConsciente: boolean;
}

export const TransacaoSchema = SchemaFactory.createForClass(Transacao);