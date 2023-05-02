export default class People {
    static find(_arg0:(item:any) => boolean) {
        throw new Error('Method not implemented');
    }

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