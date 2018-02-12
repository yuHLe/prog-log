import { League } from '../models/league';

export class LeagueService {
    getLeagueInfo = (): League => {
        let currentLeague: League = {
            Number: 1,
            StartDate: new Date(),
            EndDate: new Date(),
            Block: ['Ixalan', 'Rivals of Ixalan']
        }
        return currentLeague;
    }
}