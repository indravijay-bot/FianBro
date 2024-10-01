const dashboardService = require('../Services/dashboard.service');

module.exports = async (req, res) => {
  console.log("Controller reached");  

  try {
    console.log("Fetching online users");

    const onlineUsers = await dashboardService.getOnlineUsers();
    
    console.log("Online users fetched:", onlineUsers);

    res.status(200).json({
      message: "Online users fetched successfully",
      code: 200,
      onlineUsers
    });
  } catch (error) {
    console.error("Error fetching online users:", error);
    res.status(500).json({ message: "Server error", code: 500 });
  }
};
