import Customer from '../models/customers.js';

const getUsers = (req, res) => {
  res.render('users');
};

const postUsers = async (req, res) => {
  try {
    const submittedName = await Customer.find({ name: `${req.body.name}` });
    res.render('users', {
      title: '[POST] Getting User...',
      message: `Hello now, ${submittedName[0].name}!`,
    });
  } catch (error) {
    res
      .status(500)
      .send(`Error: could not get user: ${req.body.name} from database`);
  }
};

export { getUsers, postUsers };
