import {User} from './User';
import {Modifier} from './Modifier';

export class Contract {
  public contractId: number = null;
  public contractOwner: User = null;
  public contractTarget: User = null;
  public contractReward: number = null;
  public requirements: Array<Modifier> = null;
  public optionals: Array<Modifier> = null;
  public contractDetails: string = null;
  public contractActive: boolean;
  public contractCompletedBy: User = null;
  public contractCompletedOptionals: Array<Modifier> = null;

}
