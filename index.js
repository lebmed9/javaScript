// let number = prompt ("Введите числло", 1);
// console.log(typeof number);

const user = {
    role: "admin",
};

function checkAcsess(user) {
    return user.role === 'admin'
}
function showMessage() {
    checkAcsess(user) ? alert('Доступ разрешен') : alert('Доступ заперщен')
}
showMessage()