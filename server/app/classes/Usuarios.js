class Usuarios {
    constructor() {
        this.peoples = [];
    }
    addPerson(id, displayname, room){
        let person = {
            id,
            displayname,
            room
        };
        this.peoples.push(person);
        return this.peoples;
    }
    getPerson(id) {
        let person = this.peoples.filter(person => person.id === id)[0];
        return person;
    }
    getPersons() {
        return this.peoples;
    }
    getPersonsInRoom (room) {
        let personsInRoom = this.peoples.filter(person => person.room === room)
        return personsInRoom;
    }
    deletePerson(id) {
        let deltedPerson = this.getPerson(id);
        this.peoples = this.peoples.filter(person => person.id != id);
        return deltedPerson;
    }
}
module.exports = {Usuarios};