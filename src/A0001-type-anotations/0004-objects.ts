const objetoA: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoA.chaveA;
objetoA.chaveC = 'Valor C';
objetoA.chaveZ = 'Valor Z';

console.log(objetoA);
