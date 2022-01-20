// Реализовать объект пользователя с полями name, lastname ,middleName, birthDate. Реализовать геттер/сеттер fullname,
// который возвращает одной строкой полное имя пользователя и записывает имя, фамилию и отчество при присвоении значения.
// Реализовать геттер age, который возвращает возраст используя данные даты рождения.

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
