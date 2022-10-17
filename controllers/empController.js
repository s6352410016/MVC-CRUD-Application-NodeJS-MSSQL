const conn = require('../model/model');

const getEmployees = async (req , res) => {
    try{
        const data = await conn.request().query('SELECT * FROM employees');
        res.render('homepage' , {
            data: data.recordsets[0],
            successMsg: ''
        });
    }catch(err){
        console.log(err);
    }
}

const add = async (req , res) => {
    try{
        res.render('addemployee' , {
            successMsg: ''
        });
    }catch(err){
        console.log(err);
    }
}

const addEmployee = async (req , res) => {
    try{
        const {empName , empAddress , empTel , empSalary} = req.body;
        await conn.request()
        .input('empName' , empName)
        .input('empAddress' , empAddress)
        .input('empTel' , empTel)
        .input('empSalary' , empSalary)
        .query('INSERT INTO employees (empName , empAddress , empTel , empSalary) VALUES(@empName , @empAddress , @empTel , @empSalary)');
        res.render('addemployee' , {
            successMsg: 'Successfully to add.'
        });
    }catch(err){
        console.log(err);
    }
}

const update = async (req , res) => {
    try{
        const {id} = req.params;
        const data = await conn.request()
        .input('id' , id)
        .query('SELECT * FROM employees WHERE id = @id');
        res.render('updateemployee' , {
            successMsg: '',
            data: data.recordsets[0][0]
        })
    }catch(err){
        console.log(err);
    }
}

const updateEmployee = async (req , res) => {
    try{
        const {empName , empAddress , empTel , empSalary} = req.body;
        const {id} = req.params;
        await conn.request()
        .input('empName' , empName)
        .input('empAddress' , empAddress)
        .input('empTel' , empTel)
        .input('empSalary' , empSalary)
        .input('id' , id)
        .query('UPDATE employees SET empName = @empName , empAddress = @empAddress , empTel = @empTel , empSalary = @empSalary WHERE id = @id');
        res.render('updateemployee' , {
            successMsg: 'Successfully to update.',
            data: ''
        });
    }catch(err){
        console.log(err);
    }
}

const deleteEmployee = async (req , res) => {
    try{
        const {id} = req.params;
        await conn.request()
        .input('id' , id)
        .query('DELETE FROM employees WHERE id = @id');  
        res.redirect('/');
    }catch(err){
        console.log(err);
    }
}

module.exports = {
    getEmployees,
    add,
    addEmployee,
    update,
    updateEmployee,
    deleteEmployee
}