export function createError(): never {
  throw new Error('Error');
}

createError();

// não retorna
