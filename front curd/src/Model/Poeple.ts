export default class People {

    id: number;
    firstname: string;
    lastname: string;
    country: string;
    phone: string;
    email:string;
    

    constructor(id: number, firstname: string, lastname: string, country: string, phone: string, email:string){
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.country = country;
        this.phone = phone;
        this.email = email;
    }
}