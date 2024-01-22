module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define('Image', { 
       src: {
        type: DataTypes.STRING(200),
        alloNull: false,
       },
    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci', // 이모티콘 저장
    });
    Image.associate = (db) => {};
       return Image;
    }