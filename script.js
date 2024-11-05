const users = ["Марат", "Вадим"];

const searchUser = prompt("Введите имя пользователя");

for (let i = 0; i < users.length; i++) {
  if (users[i].toLowerCase() === searchUser.toLowerCase()) {
    alert(`Пользователь с именем "${searchUser}" найден.`);
    break;
  } else {
    alert(`Пользователь с именем "${searchUser}" не найден.`);
    users.push(searchUser);
    break;
  }
}
