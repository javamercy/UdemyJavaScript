/* 


    Demo : Creating Objects

    ** Dışarıdan name ve salary bilgilerini alan Employee constructor ı tanımlayınız.
    ** Yıl içinde o ana kadar alınan toplam maaş ve alınan toplam vergi tutarını 
    hesaplayan fonksiyonu oluşturunuz.
        
        Vergi Dilimler:

            ** 20.000'e kadar 20% vergi
            ** 30.000'e kadar 25% vergi
            ** 300'den sonra 27% vergi

*/





function Employee(name, salary) {

    if (!(this instanceof Employee)) {
        return new Employee(name, salary);
    }

    this.name = name;
    this.salary = salary;
}

Employee.prototype.calculateTax = function() {

    if (this.salary <= 20000) {

        return this.salary * 20 / 100;

    } else if (this.salary > 20000 && this.salary <= 30000) {

        return this.salary * 25 / 100;

    } else {

        return this.salary * 27 / 100;
    }
}

Employee.prototype.calculateSalary = function() {

    let tax = this.calculateTax();

    this.salary -= tax;
}


const emrecan = new Employee("emrecan", 22000);


emrecan.calculateSalary();
console.log(emrecan);