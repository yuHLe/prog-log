import { Component } from '@angular/core';

import { League } from '../models/league';
import { LeagueService } from '../services/league-service';

@Component({
    selector: "main-page",
    template: `
        <h1>League {{league.Number}}<h1>
        <h3>{{league.StartDate}} - {{league.EndDate}}</h3>
    `
})
export class LeagueInfo {
    league: League;

    constructor(leagueService: LeagueService) {
        this.league = leagueService.getLeagueInfo();
    }
}