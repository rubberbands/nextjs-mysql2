module.exports = (sequelize, Sequelize) => {
  const Data = sequelize.define("data", {
    name: {
      type: Sequelize.STRING
    },
    address: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    }, 
    phone: {
      type: Sequelize.INTEGER
    }
  });

  return Data;
};