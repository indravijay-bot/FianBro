const Income = require('../Modals/income.modal');

exports.createIncome = async (incomeData) => {
    try {
        const income = new Income(incomeData);
        await income.save();
        return income;
    } catch (error) {
        console.error('Error saving income:', error);
        throw new Error('Error saving income');
    }
};
exports.getIncome = async (userId) => {
    try {
        console.log(userId)
        const users = await Income.find({ "users": userId });
        console.log('Users found:', users);
        return users;
    } catch (error) {
        console.error('Error saving income:', error);
        throw new Error('Error saving income');
    }
};
