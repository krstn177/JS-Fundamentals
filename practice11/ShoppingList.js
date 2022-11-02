function shoppingList(input) {
  let products = input.shift().split('!');
  let command = input.shift();
  while (command != "Go Shopping!") {
    let tokens = command.split(' ');
    let cmd = tokens[0];
    let item = tokens[1];
    let newItem = tokens[2];
    switch (cmd) {
      case "Urgent":
          if (!products.includes(item)) {
              products.unshift(item);
          }
        break;
      case "Unnecessary":
        if (products.includes(item)){
            products.splice(products.indexOf(item), 1); //mozhe da se nalozhi while
        }
        break;
      case "Correct":
        if (products.includes(item)){
            products[products.indexOf(item)] = newItem;
        }
        break;
      case "Rearrange":
        if (products.includes(item)){
            products.push(products.splice(products.indexOf(item), 1));
        }
        break;

      default:
        break;
    }
    command = input.shift();
  }
  console.log(products.join(', '));
}
shoppingList(["Tomatoes!Potatoes!Bread",
"Unnecessary Milk",
"Urgent Tomatoes",
"Go Shopping!"]);
shoppingList(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"]);


