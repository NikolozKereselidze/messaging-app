export const registerUser = (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;
  } catch (err) {
    console.error(err);
  }
};
