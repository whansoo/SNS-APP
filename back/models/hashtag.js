module.exports = (sequelize, DataTypes) => {
    const Hashtag = sequelize.define('Hashtag', { 
       name: {
        type: DataTypes.STRING(20),
        alloNull: false,
       },
    }, {
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci', // 이모티콘 저장
    });
    Hashtag.associate = (db) => {
      db.Hashtag.belongsToMany(db.Post, { through: 'PostHashtag' });  //게시글과 해쉬태그간의 다대다 관계
    };
       return Hashtag;
    }