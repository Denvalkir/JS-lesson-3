const users = ["Марат", "Вадим"];
const searchUser = prompt("Здравствуйте! Введите имя пользователя");

const result = users.find(
  (item) => item.toLowerCase() === searchUser.toLowerCase()
);

if (result == null || result == undefined) {
  const question = prompt(
    `Пользователь ${searchUser} не найден.
     Если хотите добавить нового пользователя, то введите "да"`
  );
  alert(
    question.toLowerCase() == "да"
      ? "Новый пользователь добавлен. Всего доброго!"
      : "Пользователь не добавлен. Всего доброго!"
  );
} else {
  alert(`Пользователь ${result} найден!`);
}
