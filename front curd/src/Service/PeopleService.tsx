import Poeple from "../Model/Poeple";
import People from './../Model/Poeple';

export default class PeopleService{

    static async GetPeopleByID(id: string | undefined) {
        throw new Error("Method not implemented.");
    }
    static async GetPeople(): Promise<Poeple[]>{
        return fetch('http://localhost:8080/people/all', {
            headers: { "Content-Type": "application/json"}
            })
          .then(response => response.json())
          .catch(error => this.handleError(error));
      }

        static async PeopleById(id: number): Promise<Poeple|null>{
            return fetch(`http://localhost:8080/people/find/${id}`, {
                headers: { "Content-Type": "application/json"}
                })
              .then(response => response.json())
              .then(data => this.isEmpty(data) ? null : data)
              .catch(error => this.handleError(error));
          }

        static async searchPeople(term:string): Promise<Poeple[]>{
            return fetch(`http://localhost:8080/people/name/${term}`, {
                headers: { "Content-Type": "application/json"}
                })
              .then(response => response.json())
              .catch(error => this.handleError(error));
          }
static async deletePeople(people:People): Promise<People>{
    return fetch(`http://localhost:8080/people/${people.id}`,{
        method : "DELETE",
                })
              .then(response => response.json())
              .catch(error => this.handleError(error));
          }

          
          static handleError(error: Error): void {
            console.error(error);
          }
        static isEmpty(data: object): boolean {
            return Object.keys(data).length === 0;
          }

    }
