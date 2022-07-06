import { Coach } from './Coach';

export class GolfCoach implements Coach {
   getDAilyWorkout(): string {
      return 'Hit 100 balls at the golf range';
   }
}
