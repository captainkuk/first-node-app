const bcrypt = require('bcrypt');
const password = 'not_bacon;';
const myHash = 's0/\/\P4$$w0rD';

bcrypt.compare(password,myHash,function(err,res){
    if(res==true){
        console.log('password match!');
    }else {
        console.log('mismatch please try again!!!');
    }
});