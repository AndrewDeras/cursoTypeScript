export abstract class Player {
  protected abstract emoji: string;
  constructor(
    protected name: string,
    protected attack: number,
    protected health: number,
  ) {}

  makeAnAttack(player: Player): void {
    this.shout();
    player.loseHealth(this.attack);
  }

  loseHealth(attackForce: number): void {
    this.health -= attackForce;
    console.log(`${this.name} tem ${this.health} de vida.`);
  }

  abstract shout(): void;
}

export class Warrior extends Player {
  protected emoji = '\u{1F9DD}';
  shout(): void {
    console.log(this.emoji + 'Attaaaack');
  }
}
export class Monster extends Player {
  protected emoji = '\u{1F9DF}';
  shout(): void {
    console.log(this.emoji + 'Ataaacck');
  }
}

const goku = new Warrior('Goku', 17, 120);
const cell = new Monster('Cell', 17, 120);

goku.makeAnAttack(cell);
cell.makeAnAttack(goku);
