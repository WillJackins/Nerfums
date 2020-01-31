import {User} from './User';
import {Modifier} from './Modifier';

export interface Contract {
  contractId: number;
  contractOwner: User;
  contractTarget: User;
  contractReward: number;
  requirements: Array<Modifier>;
  optionals: Array<Modifier>;
  contractDetails: string;
  contractActive: boolean;
  contractCompletedBy: User;
  contractCompletedOptionals: Array<Modifier>;

}
