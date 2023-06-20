// type record

const obj1: Record<string, string | number> = {
  name: 'Andrew',
  lastName: 'Andrew',
  age: 25,
};

console.log(obj1);

type PersonProtocol = {
  name?: string;
  lastName?: string;
  age?: number;
};

// required
type PersonRequired = Required<PersonProtocol>;
// partial
type PersonPartil = Partial<PersonRequired>;
// readonly
type PersonReadoly = Readonly<PersonRequired>;
// pick
type PersonPick = Pick<PersonRequired, 'name' | 'lastName'>;

const obj2: PersonRequired = {
  name: 'Andrew',
  lastName: 'Andrew',
  age: 25,
};

console.log(obj2);

// extract and exclude

type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';

type TypeExclued = Exclude<ABC, CDE>;
type TypeExtract = Extract<ABC, CDE>;

type mongoAccount = {
  _id: string;
  name: string;
  age: number;
};

type apiAccount = Pick<mongoAccount, Exclude<keyof mongoAccount, '_id'>> & {
  id: string;
};

const mongoAccount: mongoAccount = {
  _id: 'ajgayuds76a8sd7y39hdugw98',
  name: 'Andrew',
  age: 25,
};

function mapAccount(mongoAccount: mongoAccount): apiAccount {
  const { _id, ...accountData } = mongoAccount;
  return { ...accountData, id: _id };
}

console.log(mapAccount(mongoAccount));

export default 1;
