const expenseService = require('../Services/expense.services');

exports.createExpense = async (req, res) => {
    try {
        const incomeData = req.body;
        const income = await expenseService.createExpense(incomeData);
        res.status(201).json(income);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getExpense = async (req, res) => {
    try {
        console.log("asdkjkasd")
        const userID = req.params.id;
        console.log("asdkjkasd2")
        const income = await expenseService.getExpense(userID);
        console.log("asdkjkasd3")

        res.status(200).json(income);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
