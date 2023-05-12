import * as service from '../services/occupationstatsService.js';

export function getOccupationstats(req, res) {
    service.getOccupationstats(req, res);
}

export function findBymonth(req, res) {
    service.findBymonth(req, res);
}

