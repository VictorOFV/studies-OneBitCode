import Employee from "./Employee"

class Company {
    private _name: string
    private _cnpj: number
    private _employees: Employee[]
    private _employeesCount: number

    constructor(name: string, cnpj:number) {
        this._name = name
        this._cnpj = cnpj
        this._employees = []
        this._employeesCount = this._employees.length
    }

    public get name() {
        return this._name
    }

    public get cnpj() {
        return this._cnpj
    }

    public get employees() {
        return this._employees
    }

    public get employeesCount() {
        return this._employeesCount
    }

    public hire(employee: Employee) {
      this._employees.push(employee)
    }

    public dismiss(employee: Employee) {
        const employeeData = this.findEmployee(employee.email)
        this._employees.splice(employeeData, 1)
    }

    private findEmployee(emailEmployee: string) {
        const employee = this._employees.findIndex(({ email }) => email === emailEmployee)
        return employee
    }
}

export default Company