type VotingOptions = {
  numberOfVotes: number;
  option: string;
};

export class Vote {
  private _voteOptions: VotingOptions[] = [];
  constructor(public details: string) {}

  addVoteOption(voteOption: VotingOptions): void {
    this._voteOptions.push(voteOption);
  }

  vote(voteIndex: number): void {
    if (!this._voteOptions[voteIndex]) return;
    this._voteOptions[voteIndex].numberOfVotes += 1;
  }

  get voteOptions(): VotingOptions[] {
    return this._voteOptions;
  }
}

export class VoteApp {
  private votes: Vote[] = [];

  addVotes(votes: Vote): void {
    this.votes.push(votes);
  }

  showVotes(): void {
    for (const votes of this.votes) {
      console.log(votes.details);
      for (const votesOp of votes.voteOptions) {
        console.log(votesOp.option, votesOp.numberOfVotes);
      }
      console.log('------------------------------');
      console.log('');
    }
  }
}

const votes1 = new Vote('Qual seu time preferido?');
votes1.addVoteOption({ option: 'Real Madrid', numberOfVotes: 0 });
votes1.addVoteOption({ option: 'Flamengo', numberOfVotes: 0 });
votes1.addVoteOption({ option: 'Vasco', numberOfVotes: 0 });
votes1.vote(0);
votes1.vote(0);

const voteApp = new VoteApp();
voteApp.addVotes(votes1);
voteApp.showVotes();
