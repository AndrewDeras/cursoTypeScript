//sem retorno
function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

semRetorno('1', '2', '3');

const pessoa = {
  name: 'Andrw',
  lastName: 'Deras',
  fullName(): void {
    console.log(this.name + ' ' + this.lastName);
  },
};

pessoa.fullName();

export { pessoa };
