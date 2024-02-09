let usersPhoneNumbers = [];
const usersBalance = 2000;
let totalBalanceUsers = 0;

for (let i = 0; i < users.length; i++) {
    let numOfString = '';
    for (let k = 0; k < users[i].balance.length; k++) {
        if (users[i].balance[k] !== '$' && users[i].balance[k] !== ',') {
            numOfString += users[i].balance[k];
        }
    }
    totalBalanceUsers += (+numOfString);
    if ((+numOfString) > usersBalance) {
        usersPhoneNumbers.push(users[i].phone);
    }
}

console.log(usersPhoneNumbers);
console.log(`Сумма всех балансов пользователей: $${totalBalanceUsers.toFixed(2)} доллара`);