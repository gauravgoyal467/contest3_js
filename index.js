const users = [
    { id: 1, name: "John", age: "18", profession: "Developer" },
    { id: 2, name: "Jack", age: "20", profession: "Developer" },
    { id: 3, name: "Karen", age: "19", profession: "Admin" }
];

const profession=document.getElementById('profList');
const showItem=document.getElementById('item');
const filterBtn = document.getElementById('filterBtn');
const nameInput = document.getElementById('name');
const profInput = document.getElementById('profession');
const ageInput = document.getElementById('age');
const addBtn = document.getElementById('addUser');

/*

    <div class="content">
        <span>1.</span>
        <span>Name : John</span>
        <span> Profession : developer</span>
        <span> Age : 18</span> 
    </div>

*/
// function to show user to display
function showUser(usersArray) {
    showItem.innerHTML = '';
    usersArray.forEach(user => {
        let div= document.createElement('div');
            div.className="content";
        let spanSerial=document.createElement("span");
        let spanName=document.createElement("span");
        let spanProf=document.createElement("span");
        let spanAge=document.createElement("span");

        spanSerial.innerText=user.id;
        spanName.innerText="Name : "+user.name;
        spanProf.innerText="Profession : "+user.profession;
        spanAge.innerText="Age : "+user.age;

        div.appendChild(spanSerial);
        div.appendChild(spanName);
        div.appendChild(spanProf);
        div.appendChild(spanAge);

        showItem.appendChild(div);

    });
    
}


// function for filter user
function filterUsersByProfession(profession) {
    return users.filter(user => user.profession === profession);
} 

function filterBtnClick() {
    const clickedProfession = profession.value;
    if (clickedProfession === '') {
        alert('select a profession before clicking the button.');
        return;
    }
    const filteredUsers = filterUsersByProfession(clickedProfession);
    showUser(filteredUsers);
}


// function for add user
function addUser() {
    const name = nameInput.value.trim();
    const profession = profInput.value.trim();
    const age = ageInput.value.trim();
   
    if (name === '' || age === '' || profession === '') {
        alert('Filling every input is mandatory');
        return;
    }
    const newUser = {
        id: users.length + 1,
        name,
        age,
        profession
    };
    users.push(newUser);
    showUser(users);
    alert("User Added Successfully");
    nameInput.value = '';
    ageInput.value = '';
    profInput.value = '';
}

// add initial users to the list 
showUser(users);

// add event listeners
filterBtn.addEventListener('click', filterBtnClick);
addBtn.addEventListener('click', addUser);



    
