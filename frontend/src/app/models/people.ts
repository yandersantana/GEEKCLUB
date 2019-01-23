export class People {

    constructor(_id = '', name = '', lastname = '', identificationCard = "", birthdate = "", registrationDate = ''){
        this._id = _id;
        this.name = name;
        this.lastname = lastname;
        this.identificationCard = identificationCard;
        this.birthdate = birthdate;
        this.registrationDate = registrationDate;
    }

    _id: string;
    name:string;
    lastname: string;
    identificationCard: string;
    birthdate: string;
    registrationDate: string;
    
}

