import { DefaultDto } from './default-dto';

export interface DocsOutput extends DefaultDto {
  type: string;
  name: string;
  dateModificacao: Date | string;
}
