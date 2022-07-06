import { Coach } from './Coach';

export class CricketCoach implements Coach {
   getDAilyWorkout(): string {
      return 'Practice your spin bowling technique';
   }
}
