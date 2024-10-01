const Expense = require('../Modals/expense.modal');

exports.createExpense = async (Data) => {
    try {
        const expense = new Expense(Data);
        await expense.save();
        return expense;
    } catch (error) {
        console.error('Error saving income:', error); // Log error if save fails
        throw new Error('Error saving income');
    }
};

exports.getExpense = async (Data) => {
    try {
        const user = await Expense.find({ "users": Data });
        return user;
    } catch (error) {
        console.error('Error getting expense:', error); // Log error if save fails
        throw new Error('Error getting expense');
    }
};
