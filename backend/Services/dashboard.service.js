const User = require('../Modals/user.modal');

exports.getOnlineUsers = async () => {
  console.log('Service: Fetching online users from DB');  
  try {
    const users = await User.find({ online: true }).select('firstName lastName');
    console.log('Users found:', users);
    return users;
  } catch (error) {
    console.error('Error in service while fetching users:', error);
    throw error;
  }
};
