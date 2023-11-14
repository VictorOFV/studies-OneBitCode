class User {
     _name;
    _avatar;
    _email;
    _id;
    _password;
    _staffLevel;
    constructor({ name, email, password, id, avatar }) {
        this._name = name;
        this._avatar = avatar;
        this._email = email;
        this._id = id;
        this._password = password;
        this._staffLevel = 2;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get id() {
        return this._id;
    }
    get password() {
        return this._password;
    }
    set password(newPassword) {
        this._password = newPassword;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    get avatar() {
        return this._avatar;
    }
    set avatar(value) {
        this._avatar = value;
    }
    get staffLevel() {
        return this._staffLevel;
    }
    set staffLevel(value) {
        this._staffLevel = value;
    }
}
const user = new User({ name: "lucas", email: "lucas@g", password: "125", id: 2, avatar: "a" });
export default User;
