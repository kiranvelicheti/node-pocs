getCustomerBYIdValidation = (err, customer) => {
  if (err) {
    return res.status(400).json({ success: false, error: err });
  }
  if (!customer) {
    return res
      .status(404)
      .json({ success: false, error: `customer not found` });
  }
  return res.status(200).json({ success: true, data: customer });
};
module.exports = { getCustomerBYIdValidation };
