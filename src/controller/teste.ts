import { Pessoa } from "../model/Pessoa";

let pessoa = new Pessoa('Vitor',
                        '12212112321',
                        new Date(2007/6/1),
                        '0000000',
                        'Rua numero 71',
                        1.88,65);

pessoa.falar();

pessoa.falarFrase("vai curintian");

pessoa.andar();

pessoa.andarQuilometro(2)

pessoa.comer();

pessoa.comerPrato(`carne`);