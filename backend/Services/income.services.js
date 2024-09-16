const Income = require('../Modals/income.modal');

exports.createIncome = async (incomeData) => {
    try {
        const income = new Income(incomeData);
        await income.save();
        return income;
    } catch (error) {
        console.error('Error saving income:', error); // Log error if save fails
        throw new Error('Error saving income');
    }
};
