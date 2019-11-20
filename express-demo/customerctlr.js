const Customer = require("./customer");

createcustomer = (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a customer"
    });
  }
  const customer = new Customer(body);
  if (!customer) {
    return res.status(400).json({ success: false, error: err });
  }
  customer
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: customer._id,
        message: "customer created!"
      });
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: "customer not created!"
      });
    });
};

updatecustomer = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update"
    });
  }
  Customer.findOne({ _id: req.params.id }, (err, customer) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "customer not found!"
      });
    }
    customer.name = body.name;
    customer.time = body.time;
    customer.rating = body.rating;
    customer
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: customer._id,
          message: "customer updated!"
        });
      })
      .catch(error => {
        return res.status(404).json({
          error,
          message: "customer not updated!"
        });
      });
  });
};

deletecustomer = async (req, res) => {
  await Customer.findOneAndDelete({ _id: req.params.id }, (err, customer) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!customer) {
      return res
        .status(404)
        .json({ success: false, error: `customer not found` });
    }

    return res.status(200).json({ success: true, data: customer });
  }).catch(err => console.log(err));
};

getcustomerById = async (req, res) => {
  await Customer.findOne({ _id: req.params.id }, (err, customer) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!customer) {
      return res
        .status(404)
        .json({ success: false, error: `customer not found` });
    }
    return res.status(200).json({ success: true, data: customer });
  }).catch(err => console.log(err));
};

getcustomers = async (req, res) => {
  await Customer.find({}, (err, customers) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!customers.length) {
      return res
        .status(404)
        .json({ success: false, error: `customer not found` });
    }
    return res.status(200).json({ success: true, data: customers });
  }).catch(err => console.log(err));
};

module.exports = {
  createcustomer,
  updatecustomer,
  deletecustomer,
  getcustomers,
  getcustomerById
};
