// condicional
const body = document.querySelector('body');
if (body) body.style.background = 'purple';

// non-null assertion (!)
const body2 = document.querySelector('body')!;

// type assertion
const body3 = document.querySelector('body') as HTMLBodyElement;

//htmlElement

const input = document.querySelector('.input') as HTMLInputElement;
