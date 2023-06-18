// encadeamento opcional e operador de coalescencia nula

type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'Titulo 1',
  texto: 'Texto 1 para exemplo',
  // data: new Date(),
};

console.log(
  documento.data?.toDateString() ?? '1 - Documento sem data cadastrada.',
);
console.log(undefined ?? '2 - Documento sem data cadastrada.');
console.log(null ?? '3 - Documento sem data cadastrada.');
console.log({} ?? '4 - Documento sem data cadastrada.');
