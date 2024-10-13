class user{
    constructor(uname,password){

        this.uname=uname;
        this.password=password
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password= value.toUpperCase()
    }
}
const mg = new user('mohit','156zgssh')
console.log(mg.password);