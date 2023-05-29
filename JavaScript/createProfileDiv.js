const proMainDiv = document.getElementById('mainDiv');
// const parag = document.createElement('p');


const createProfile = (id) => {

	let singleEmployee = globalEmployeeDetails.find(employee => employee.id == id)

	const data = JSON.stringify(singleEmployee);

	localStorage.setItem("DATA", data);
	
}

const mainData = localStorage.getItem("DATA");

const obj = JSON.parse(mainData);

// parag.innerHTML = obj.login;

// proMainDiv.appendChild(parag);

    const colDiv = document.createElement('div')
	const employeeDiv = document.createElement('div')
	const employeeImg = document.createElement('img')
	const employeeBody = document.createElement('div')
	const employeeHeader = document.createElement('div')
	const employeeTitle = document.createElement('h6')
	const cardButtonOuter = document.createElement('div')
	const goToRepoButton = document.createElement('button')
	const backButton = document.createElement('button')

	colDiv.classList = 'col-md-3 '
	employeeDiv.classList = 'card product mainDiv'
	employeeImg.classList = 'card-img-top'
	employeeBody.classList = 'card-body'
	employeeHeader.classList = 'product-header'
	employeeTitle.classList = 'card-title text-lg-left font-weight-bold text-uppercase'
	cardButtonOuter.classList = 'btn-outer d-flex justify-content-between'
	goToRepoButton.classList = 'btn btn-primary go-to-repo-btn'
	backButton.classList = 'btn btn-primary profile-btn'

	colDiv.id = `employee-${obj.id}`

	employeeTitle.innerText = `${obj.login}`
	
	goToRepoButton.innerHTML = 'Github'
	backButton.innerText = 'Back'

	employeeImg.src = obj.avatar_url
	employeeImg.alt = 'employee-img'

	colDiv.appendChild(employeeDiv)
	employeeDiv.appendChild(employeeImg)
	employeeDiv.appendChild(employeeBody)
	employeeBody.appendChild(employeeHeader)
	employeeHeader.appendChild(employeeTitle)
	employeeBody.appendChild(cardButtonOuter)
	cardButtonOuter.appendChild(goToRepoButton)
	cardButtonOuter.appendChild(backButton)
	

	proMainDiv.appendChild(colDiv)

	goToRepoButton.addEventListener('click', function () {
        window.open(`https://github.com/${obj.login}`, "_blank")
    })

	backButton.addEventListener('click', function () {
        window.location = "./index.html"
    })


