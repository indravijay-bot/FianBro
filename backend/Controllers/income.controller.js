const incomeService = require('../Services/income.services');

exports.createIncome = async (req, res) => {
    try {
        const incomeData = req.body;
        const income = await incomeService.createIncome(incomeData);
        res.status(201).json(income);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getIncome = async (req, res) => {
    try {
        const income = await incomeService.getIncome();
        res.status(200).json(income);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
