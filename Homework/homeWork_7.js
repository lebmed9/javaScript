const user = {
  name: "Иван",
  lastName: "Иванов",
  middleName: "Иванович",
  birthDate: "21.08.1984",
  get fullName() {
    return `${this.name} ${this.lastName} ${this.middleName}`;
  },
  set fullName(value) {
    return;
  },
};
console.log(user.fullName);
