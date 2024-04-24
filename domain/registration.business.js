const BaseBusiness = require("./base.business");
const { Student } = require("./models");

class RegistrationBusiness extends BaseBusiness {
  constructor({ RegistrationBusiness }) {
    super(RegistrationBusiness, Student);
  }
}

module.exports = RegistrationBusiness;
