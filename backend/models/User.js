var mongoose = require('mongoose'); // mongoose 불러오기
var bcrypt = require('bcryptjs');

var UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

UserSchema.methods.comparePassword = function(inputPassword, cb) {
    // db에 저장한 password가 암호화되었기 때문에 compareSync함수를 통해 비교한다.
    var same = bcrypt.compareSync(inputPassword, this.password)

    if (same) {
        cb(null, true);
    } else {
        cb('error');
    }
};
/*
UserSchema.path('email').validate(function(email) {
    return email.length;
}, 'email 칼럼의 값이 없습니다.');

UserSchema.method('athenticate', function(plainText, inSalt, hashed_password) {
    if (inSalt) {
        console.log('authenticate 호출됨.');
        return this.encryptPassword(plainText, inSalt) === hashed_password;
    } else {
        console.log('authentiacate 호출됨.');
        return this,encryptPassword(plainText) === hashed_password;
    }
});

UserSchema.static('findByEmail', function(email, callback) {
    return this.find({ email:email }, callback);
});
UserSchema.static('findAll', function(callback) {
    return this.find({}, callback);
});
*/
// model을 export 해주기
// var User = mongoose.model("user", userSchema);
// module.exports = { User };
module.exports = User = mongoose.model('user', UserSchema)
