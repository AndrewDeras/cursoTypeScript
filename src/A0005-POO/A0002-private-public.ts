// public é o padrão, é redundante colocar
// private protege os dados de serem accesados fora da classe

export class Company {
  public readonly name: string;
  private readonly collaborators: Collaborators[] = [];
  protected readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  setColaborator(colaborator: Collaborators): void {
    this.collaborators.push(colaborator);
  }

  showCollaborators(): void {
    this.collaborators.forEach((cola) => console.log(cola));
  }

  // public getNome(): string {
  //   return this.name;
  // }
}

export class Collaborators {
  constructor(public readonly name: string, public readonly lastName: string) {}
}

const companyOne = new Company('OHB', '70.894.220/0001-91');
const colaborator1 = new Collaborators('Andrew', 'Deras');
const colaborator2 = new Collaborators('Vini', 'Jr');
const colaborator3 = new Collaborators('Thibaut', 'Courtois');
companyOne.setColaborator(colaborator1);
companyOne.setColaborator(colaborator2);
companyOne.setColaborator(colaborator3);
// companyOne.showCollaborators();
// console.log(companyOne.getNome(), companyOne.name);
