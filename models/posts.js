module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
        // Title of post request
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // Description of post request
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //Users identification
        UserId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    Post.associate = models => {
        Post.belongsTo(models.User, {
            foreignKey: {
                allowNull: true
            }
        });
    }

    return Post;
};