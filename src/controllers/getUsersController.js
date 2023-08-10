import Customer from '../models/customers.js';

const getUsers = (req, res) => {
  res.render('getUsers');
};

const postUsers = async (req, res) => {
  try {
    const submittedName = await Customer.find({ name: `${req.body.name}` });
    res.render('getUsers', {
      name: `Successfully Retrieved user: ${submittedName[0].name}!`,
      age: `Age: ${submittedName[0].age}`,
    });
  } catch (error) {
    res.status(500).render('getUsers', {
      name: `Failed to Retrieve user: ${req.body.name}!`,
    });
  }
};

export { getUsers, postUsers };
