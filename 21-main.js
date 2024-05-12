//switch

//in the switch we can test if an element is equal to an variable so we can't use > or < 
let role = prompt('what is your role?');
switch(role) {
    case 'admin':
        document.write('create, update, delete');
        break;
    case 'moderator':
        document.write('create, update');
        break;
    case 'editor':
        document.write('update');
        break;
    default:
        document.write('hello user');
}

//the code above is equal to the code below

//if (role == 'admin') {
    //document.write('create, update, delete');
//}
//if (role == 'moderator') {
    //document.write('create, update');
//}
//if (role == 'editor') {
    //document.write('update');
//}
//else {
    //document.write('hello user');
//}
