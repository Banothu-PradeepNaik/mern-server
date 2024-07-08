const User = require('./model/userSchema');

const resolvers = {
  Query: {
    getUsers: async () => {
      try {
        return await User.find();
      } catch (err) {
        throw new Error('Error fetching users');
      }
    }
  },
  Mutation: {
    createUser: async (_, { input }) => {
      try {
        const user = new User(input);
        await user.save();
        return user;
      } catch (err) {
        throw new Error('Error creating user');
      }
    },
    changePass: async (_, { id, password }) => {
      try {
        const user = await User.findById(id);
        if (!user) {
          throw new Error('User not found');
        }
        user.password = password;
        await user.save();
        return user;
      } catch (err) {
        throw new Error('Error changing password');
      }
    }
  }
};

module.exports = resolvers;
