let firstName = 'Antonia';
let lastName = 'Francesca';

function fullName(firstName,lastName){
    return firstName + ' ' + lastName;
}

// const fullName = function(firstName,lastName){
//     return '${firstname} {lastName}';
// };

// const fullName = (firstName,lastName) => '${firstname} {lastName}';   

document.querySelector('#fullname').innerHTML = fullName('Horacio',"Velarde");
