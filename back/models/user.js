module.exports = (sequelize, DataTypes) => {
const User = sequelize.define('User', { //MySQL에는 users 테이블 생성
    // id는 기본적으로 들어있다.
   email: {
     type: DataTypes.STRING(30),
     allowNull: false, //필수
     unique: true, //고유한 값
   },
   nickname: {
    type: DataTypes.STRING(30),
    allowNull: false, //필수
   },
   password: {
    type: DataTypes.STRING(100), //암호화 때매 길게 
    allowNull: false, //필수
   },
}, {
    charset: 'utf8',
    collate: 'utf8_general_ci', // 한글 저장
});
 User.associate = (db) => {};
   return User;
}