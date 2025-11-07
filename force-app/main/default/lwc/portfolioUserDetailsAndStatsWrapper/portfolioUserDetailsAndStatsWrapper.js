import { LightningElement, api } from 'lwc';

export default class PortfolioUserDetailsAndStatsWrapper extends LightningElement {
    @api recordId
    @api objectApiName
    @api rank
    @api badges
    @api points
    @api trails
    @api resumeUrl
}