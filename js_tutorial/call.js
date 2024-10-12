function setuserid(userid){
    this.userid =userid
}
function data(userid,email,password){
    setuserid.call(this,userid)
    this.email =email
    this.password=password
}
const bring =new data('mohit','mohit12@git.com','123')
console.log(bring);

