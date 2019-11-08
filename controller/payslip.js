
function details (req,res){

    const employee_detail = {
        first_name : req.body.first_name,
        last_name  : req.body.last_name,
        annual_salary : req.body.annual_salary,
        super_rate : req.body.super_rate,
        payment_start_date : req.body.payment_start_date
    }

     const name = employee_detail.first_name + " " + employee_detail.last_name;
     const pay_period = employee_detail.payment_start_date;
     const gross_income = (employee_detail.annual_salary / 12).toFixed(0) ;
     const income_tax = incomeTax(employee_detail.annual_salary);
     const net_income = gross_income-income_tax;
     const super_amount =  superRate(gross_income,employee_detail.super_rate);

     res.status(200).send({name,pay_period,gross_income,income_tax,net_income,super_amount});

}

//This function is used to find out super-amount when super is given in % and gross-income
function superRate(gross_income, rate) {
    var super_rate = rate.replace(new RegExp('%', 'g'), "");
    return (((gross_income * super_rate) / 100).toFixed(0));
  }

//This function is used to find out the income tax for a given annual salary
function incomeTax(annual_salary) {
    if (annual_salary <= 18200) {
      return 0;
    } else if (annual_salary >= 18201 && annual_salary <= 37000) {
      return ((((annual_salary - 18200) * 0.19) / 12).toFixed(0));
    } else if (annual_salary >= 37001 && annual_salary <= 80000) {
      return (((3572 + (annual_salary - 37000) * 0.325) / 12).toFixed(0));
    } else if (annual_salary >= 80001 && annual_salary <= 180000) {
      return (((17547 + (annual_salary - 80000) * 0.37) / 12).toFixed(0));
    } else if (annual_salary >= 180001) {
      return (((54547 + (annual_salary - 180000) * 0.45) / 12).toFixed(0));
    }
  }

  module.exports = {
     details
    
  }