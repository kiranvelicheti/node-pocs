const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
const sinon = require("sinon");
const Customer = require("../customer");
const CustomerCtrl = require("../customerctlr");
const { mockRes } = require("sinon-express-mock");
const sinonChai = require("sinon-chai");

chai.use(sinonChai);
const res = mockRes();
const customerData = {
  data: {
    name: "kiran",
    address: "Farmington"
  },
  success: true
};

describe("CustomerController", () => {
  describe("getcustomerById", () => {
    it("should return matching customer", () => {
      sinon
        .mock(Customer)
        .expects("findOne")
        .withArgs({ _id: 123 })
        .resolves(customerData.data);

      CustomerCtrl.getcustomerById({ params: { id: 123 } }, res).then(() => {
        expect(res.json).to.be.calledWith(customerData);
      });
    });
  });

  describe("createCustomer", () => {
    it("should return created customer", () => {
      sinon
        .mock(Customer)
        .expects("create")
        .withArgs(customerData.data)
        .resolves(customerData.data);

      CustomerCtrl.createcustomer({ body: customerData.data }, res);

      expect(res.json).to.be.calledWith(customerData);
      expect(res.status).to.be.calledWith(200);
    });
  });

  describe("updatecustomer", () => {
    before(() => {
      Customer.findOne.restore();
      Customer.create.restore();
    });
    it("should return updated customer", () => {
      sinon
        .mock(Customer)
        .expects("findOne")
        .withArgs({ _id: 123 })
        .resolves(customerData.data);

      sinon
        .mock(Customer)
        .expects("create")
        .withArgs({
          name: "kiran5",
          address: "Farmington hills"
        })
        .resolves({
          _id: 123,
          name: "kiran5",
          address: "Farmington hills"
        });

      CustomerCtrl.createcustomer(
        {
          params: { id: 123 },
          body: {
            name: "kiran5",
            address: "Farmington hills"
          }
        },
        res
      );

      expect(res.json).to.be.calledWith(customerData);
      expect(res.status).to.be.calledWith(200);
    });
  });
});
