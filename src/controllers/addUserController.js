import Customer from '../models/customers.js';

const getAddUser = (req, res) => {
  res.render('addUser', {
    message: `Let's add a user!`,
  });
};

const postAddUser = async (req, res) => {
  const newCustomer = new Customer({
    name: req.body.name,
    age: req.body.age,
  });

  try {
    await newCustomer.save();
    res.status(201).render('addUser', {
      message: `Successfully added user: ${req.body.name}!`,
    });
  } catch (error) {
    res.status(409).render('addUser', {
      message: `Failed to add user: ${req.body.name}!`,
    });
  }
};

export { getAddUser, postAddUser };
