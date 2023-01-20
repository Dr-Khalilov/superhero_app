'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('superheroes', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            nickName: {
                field: 'nick_name',
                allowNull: false,
                unique: true,
                type: Sequelize.STRING,
            },
            realName: {
                field: 'real_name',
                allowNull: false,
                unique: true,
                type: Sequelize.STRING,
            },
            originDescription: {
                field: 'origin_description',
                allowNull: false,
                type: Sequelize.TEXT,
            },
            catchPhrase: {
                field: 'catch_phrase',
                allowNull: false,
                type: Sequelize.STRING(500),
            },
            createdAt: {
                field: 'created_at',
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                field: 'updated_at',
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('superheroes');
    },
};
