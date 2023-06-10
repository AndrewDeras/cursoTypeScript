type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  favColor?: string;
};

type RGBColor = 'Red' | 'Green' | 'Blue';
type CMYKColor = 'Ciano' | 'Magent' | 'Yellow' | 'Black';
type FavColor = RGBColor | CMYKColor;

const person1: Pessoa = {
  nome: 'Andrew',
  idade: 25,
  salario: 100_000,
};

export function setfavColor(pessoa: Pessoa, color: FavColor): Pessoa {
  return { ...pessoa, favColor: color };
}

console.log(person1);

console.log(setfavColor(person1, 'Blue'));
