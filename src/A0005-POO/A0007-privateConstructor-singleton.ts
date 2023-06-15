// singleton - factory method GoF

export class Database {
  private static database: Database;

  constructor(
    private host: string,
    private username: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(
      `Conectado: ${this.host} - ${this.username} - ${this.password}`,
    );
  }

  static getDatabase(
    host: string,
    username: string,
    password: string,
  ): Database {
    if (Database.database) {
      console.log('Retornando instancia já criada.');
      return Database.database;
    }
    console.log('Criando nova instancia .');
    Database.database = new Database(host, username, password);
    return Database.database;
  }
}

const db1 = Database.getDatabase('localhost', 'root', '123456');
const db2 = Database.getDatabase('localhost', 'root', '123456');
const db3 = Database.getDatabase('localhost', 'root', '123456');
const db4 = Database.getDatabase('localhost', 'root', '123456');
db1.connect();
db2.connect();
db3.connect();
db4.connect();
console.log(db1 === db2);
