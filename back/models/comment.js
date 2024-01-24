module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      //UserId: 1 하나의 댓글에 그 댓글의 소유자 정해줄 수 있음
      //PostId: 3 하나의 댓글에 그 속한 게시글을 표시
    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci', // 한글 저장
    });
    Comment.associate = (db) => {
      db.Comment.belongsTo(db.User); //댓글 하나에 그 속한 유저는 하나
      db.Comment.belongsTo(db.Post); //댓글 하나에 그 속한 게시글은 하나
    };
       return Comment;
    }