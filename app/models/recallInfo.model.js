module.exports = (sequelize, Sequelize) => {
    const RecallInfo = sequelize.define("recallInfo", {
        recordId: {
            type: Sequelize.INTEGER
        },
        campaignNumber: {
            type: Sequelize.STRING(12)
        },
        vehicleOrEquipmentMake: {
            type: Sequelize.STRING(25)
        },
        vehicleOrEquipmentModel: {
            type: Sequelize.STRING(256)
        },
        p: {
            type: Sequelize.STRING()
        },
        p: {
            type: Sequelize.STRING()
        },
        p: {
            type: Sequelize.STRING()
        },
        p: {
            type: Sequelize.STRING()
        },
        p: {
            type: Sequelize.STRING()
        },
        p: {
            type: Sequelize.STRING()
        },
        p: {
            type: Sequelize.STRING()
        },

    })
    return RecallInfo
}