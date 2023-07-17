window.addEventListener('load', function() {
    fetch('http://localhost:3000/dogs')
      .then(response => response.json())
      .then(dogs => renderDogsTable(dogs));
    });
  
function renderDogsTable(dogs) {
      const tableBody = document.querySelector('#table-body');
      tableBody.innerHTML = '';
  
      dogs.forEach(dog => {
        const row = document.createElement('tr');
  
        const nameCell = document.createElement('td');
        nameCell.textContent = dog.name;
        row.appendChild(nameCell);
  
        const breedCell = document.createElement('td');
        breedCell.textContent = dog.breed;
        row.appendChild(breedCell);
  
        const sexCell = document.createElement('td');
        sexCell.textContent = dog.sex;
        row.appendChild(sexCell);
  
        const editCell = document.createElement('td');
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', function() {
          populateFormWithDogInfo(dog);
        });
        editCell.appendChild(editButton);
        row.appendChild(editCell);
  
        tableBody.appendChild(row);
      });
    }
  
    function populateFormWithDogInfo(dog) {
      const form = document.querySelector('#dog-form');
      form.elements['name'].value = dog.name;
      form.elements['breed'].value = dog.breed;
      form.elements['sex'].value = dog.sex;
  
      const submitButton = document.querySelector('submit');
      submit.addEventListener('click', function(event) {
        event.preventDefault();
  
        const updatedDog = {
          name: form.elements['name'].value,
          breed: form.elements['breed'].value,
          sex: form.elements['sex'].value
        };
  
        fetch(`http://localhost:3000/dogs/${dog.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedDog)
        })
        .then(() => fetch('http://localhost:3000/dogs'))
        .then(response => response.json())
        .then(dogs => renderDogsTable(dogs));
      });
    }
  
    const form = document.querySelector('#dog-form');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const name = form.elements['name'].value;
      const breed = form.elements['breed'].value;
      const sex = form.elements['sex'].value;
  
      fetch('http://localhost:3000/dogs', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, breed, sex })
      })
        .then(() => fetch('http://localhost:3000/dogs'))
        .then(response => response.json())
        .then(dogs => renderDogsTable(dogs));
    });
  
  