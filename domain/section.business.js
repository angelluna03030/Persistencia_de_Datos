const BaseBusiness = require("./base.business");
const { Student } = require("./models");

class SectionBusiness extends BaseBusiness {
  constructor({ SectionBusiness }) {
    super(SectionBusiness, Student);
  }
}

module.exports = SectionBusiness;
