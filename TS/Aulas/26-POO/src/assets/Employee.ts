import Jobs from "../interfaces/Jobs"

class Employee {
    private _name:string
    private _email:string
    private _telephone: number
    private _jobs: Jobs[]

    constructor(name:string, email:string, telephone:number) {
        this._name = name
        this._email = email
        this._telephone = telephone
        this._jobs = []
    }

    public get name() {
        return this._name
    }

    public get jobs() {
        return this._jobs
    }

    public get email() {
        return this._email
    }

    public get telephone() {
        return this._telephone
    }
}

export default Employee