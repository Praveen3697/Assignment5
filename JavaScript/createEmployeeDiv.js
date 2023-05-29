const employeeParentDiv = document.getElementById('employeeCard')

const createEmployeeDiv = (employee) => {

	const colDiv = document.createElement('div')
	const employeeDiv = document.createElement('div')
	const employeeImg = document.createElement('img')
	const employeeBody = document.createElement('div')
	const employeeHeader = document.createElement('div')
	const employeeTitle = document.createElement('h6')
	const cardButtonOuter = document.createElement('div')
	const goToRepoButton = document.createElement('button')
	const profileButton = document.createElement('button')

	colDiv.classList = 'col-md-3 '
	employeeDiv.classList = 'card product mainDiv'
	employeeImg.classList = 'card-img-top'
	employeeBody.classList = 'card-body'
	employeeHeader.classList = 'product-header'
	employeeTitle.classList = 'card-title text-lg-left font-weight-bold text-uppercase'
	cardButtonOuter.classList = 'btn-outer d-flex justify-content-between'
	goToRepoButton.classList = 'btn btn-primary go-to-repo-btn'
	profileButton.classList = 'btn btn-primary profile-btn'

	colDiv.id = `employee-${employee.id}`

	employeeTitle.innerText = `${employee.login}`
	
	goToRepoButton.innerHTML = 'Github'
	profileButton.innerText = 'Profile'

	employeeImg.src = employee.avatar_url
	employeeImg.alt = 'employee-img'

	colDiv.appendChild(employeeDiv)
	employeeDiv.appendChild(employeeImg)
	employeeDiv.appendChild(employeeBody)
	employeeBody.appendChild(employeeHeader)
	employeeHeader.appendChild(employeeTitle)
	employeeBody.appendChild(cardButtonOuter)
	cardButtonOuter.appendChild(goToRepoButton)
	cardButtonOuter.appendChild(profileButton)
	

	employeeParentDiv.appendChild(colDiv)

    goToRepoButton.addEventListener('click', function () {
        window.open(`https://github.com/${employee.login}`, "_blank")
    })

    profileButton.addEventListener('click', function () {
        createProfile(employee.id);
        window.location = "./user-details.html"
    })

    employeeDiv.addEventListener('click', function () {
        createProfile(employee.id);
        window.location = "./user-details.html"
    } )



}
