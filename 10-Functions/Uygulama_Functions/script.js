// Demo : Functions


let accountA = {

    name: "Emrecan Kurşun",
    accountNo: "12345678",
    balance: 2000,
    additionalAccount: 1000
}

let accountB = {

    name: "Engin Demiroğ",
    accountNo: "12345679",
    balance: 3000,
    additionalAccount: 2000
}


function getMoney(account, amount) {

    console.log(`Hello ${account.name}`);

    if (account.balance >= amount) {

        console.log("Para çekme işlemi başarılı!");
        account.balance -= amount;
    } else {
        let total = account.balance + account.additionalAccount;
        if (total >= amount) {

            if ((confirm("Ek hesabınızı kullnamak ister misinz?"))) {

                console.log("Paranızı alabilirsiniz");
                account.balance = 0;
                let additionalAccountDecrease = amount - account.balance;
                account.additionalAccount -= additionalAccountDecrease;

            } else {
                console.log(`${account.accountNo} hesabınızın bakiyesi yetersiz!`);
            }
        } else {

            console.log("Aq fakiri sg!");
        }
    }
}


getMoney(accountA, 3000);
getMoney(accountA, 3000);