import { Telefone } from './Telefone';

export class User {
	id: Number;
	login: String;
	senha: String;
	nome: String;
	cpf: String;
	dataNascimento: String;
  profissao: String;
  salario: DoubleRange;
	telefones: Array<Telefone>;

}
