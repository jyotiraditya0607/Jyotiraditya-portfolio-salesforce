import { LightningElement, wire } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets'
import {getRecord, getFieldValue} from 'lightning/uiRecordApi';
import FULLNAME from '@salesforce/schema/Portfolio__c.Full_Name__c'
import COMPANT_LOCATION from '@salesforce/schema/Portfolio__c.Company_Location__c'
import COMPANY_NAME from '@salesforce/schema/Portfolio__c.Company_Name__c'
import DESIGNATION from '@salesforce/schema/Portfolio__c.Designation__c'

export default class PortfolioBanner extends LightningElement {

    linkedinUrl = 'https://www.linkedin.com/in/jyotiraditya-biswal/'
    twitterUrl = 'https://x.com/jyotiraditya_2'
    githubUrl = 'https://github.com/jyotiraditya0607'
    trailheadUrl = 'https://www.salesforce.com/trailblazer/jyotiradityabiswal'
    // blogUrl = 'https://www.salesforcetroop.com/'


    userPic = `${PortfolioAssets}/PortfolioAssets/jyotiraditya.png`
    linkedin = `${PortfolioAssets}/PortfolioAssets/Social/linkedin.svg`
    // youtube = `${PortfolioAssets}/PortfolioAssets/Social/youtube.svg`
    github = `${PortfolioAssets}/PortfolioAssets/Social/github.svg`
    twitter = `${PortfolioAssets}/PortfolioAssets/Social/x.svg`
    trailhead = `${PortfolioAssets}/PortfolioAssets/Social/trailhead1.svg`
    // blog = `${PortfolioAssets}/PortfolioAssets/Social/blogger.svg`

    recordId = 'a01g5000002RML8AAO'
    @wire(getRecord, {recordId: '$recordId', fields:[FULLNAME,COMPANT_LOCATION,COMPANY_NAME,DESIGNATION]}) 
    portfolioData
    // portfolioHandler({data, error}) {
    //     if(data) {
    //         console.log("record Data", JSON.stringify(data))
    //     }

    //     if(error) {
    //         console.log("error", JSON.stringify(error))
    //     }
    // }

    get fullName() {
        return getFieldValue(this.portfolioData.data, FULLNAME)
    }
    get companyLocation() {
        return getFieldValue(this.portfolioData.data, COMPANT_LOCATION)
    }
    get companyName() {
        return getFieldValue(this.portfolioData.data, COMPANY_NAME)
    }
    get designation() {
        return getFieldValue(this.portfolioData.data, DESIGNATION)
    }

}