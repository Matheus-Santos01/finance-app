const addBtn = document.querySelector('#app .add')
const modal = document.querySelector('.modal')
const btnIncome = document.querySelector('.modal .buttons .income')
const btnExpense = document.querySelector('.modal .buttons .expense')
const formIncome = document.querySelector('.modal .content .form-income')
const formExpense = document.querySelector('.modal .content .form-expense')
const btnCreateIncome = document.querySelector('.modal .content .form-income .btn-income')
const btnInputCreateIncome = document.querySelector('.modal .content .form-income input.btn-income')
const btnCreateExpense = document.querySelector('.modal .content .form-income .btn-expense')
const modalUpdate = document.querySelector('.update-register')

let balance = [
  {
    id: 1,
    type: 'expense',
    description: 'Compras de casa',
    date: '24/01/2023',
    value: 100
  },
  {
    id: 2,
    type: 'income',
    description: 'Ganhei no bingo',
    date: '21/01/2023',
    value: 50
  }
]

function openModal(modal){
  modal.showModal()
}

function closeModal(){
  modal.close()
}

function visibleIncomeForm(event){
  event.preventDefault();
  formExpense.style.display = 'none'
  formIncome.style.display = 'block'
}

function visibleExpenseForm(event){
  event.preventDefault();
  formIncome.style.display = "none"
  formExpense.style.display = "block"
}

function clearInputs(valueInput, descriptionInput, dateInput){
  valueInput = valueInput.value = '' 
  descriptionInput = descriptionInput.value = '' 
  dateInput = dateInput.value = '' 
}

function addIncome(event){
  event.preventDefault();
  const descriptionIncome = document.querySelector('.modal .content .form-income .description')
  const dateIncome = document.querySelector('.modal .content .form-income .date')
  const formatedDateIncome = dateIncome.value.split('-').reverse().join('/')
  const valueIncome = document.querySelector('.modal .content .form-income .value')

  balance.push({
    id: balance.length + 1,
    type: 'income', 
    description: descriptionIncome.value,
    date: formatedDateIncome,
    value: Number(valueIncome.value)
  })

  closeModal()
  clearInputs(valueIncome, descriptionIncome, dateIncome)
  renderBalance()
}

function addExpense(event){
  event.preventDefault();
  const descriptionExpense = document.querySelector('.modal .content .form-expense .description')
  const dateExpense = document.querySelector('.modal .content .form-expense .date')
  const formatedDateExpense = dateExpense.value.split('-').reverse().join('/')
  const valueExpense = document.querySelector('.modal .content .form-expense .value')
  
  balance.push({
    id: balance.length + 1,
    type: "expense",
    description: descriptionExpense.value,
    date: formatedDateExpense,
    value: Number(valueExpense.value),
  })

  closeModal()
  clearInputs(valueExpense, descriptionExpense, dateExpense)
  renderBalance()
}


function renderBalance(){
  const dashboard = document.querySelector('.dashboard')
  dashboard.innerHTML = balance.map(({ id, type, value, description, date }) => {
    return `
       <div class="register" id="${id}">
          <div class="info-register"> 
            <div class="icon-register" id="${type}">
              <img src="./assets/register-${type}.svg" alt="Icon ${type}">
            </div>   
            <div class="details-register">
              <p>${description}</p>
              <span>${date}</span>
            </div>
          </div>
        
          <div class="value-register">
            <p>${value}</p>
          </div>
        </div>
    `
  }).join('')
}

function updateModal(register){

}

function showRegisterModal(){
  registers.forEach((register) => {
    const id = Number(register.getAttribute('id'))

    register.addEventListener('click', () => {
      foundRegister = balance.find((register) => register.id === id)
      console.log(foundRegister)

      const descriptionRegister = document.querySelector('.update-register .content .form-update .description')
      const dateRegister = document.querySelector('.update-register .content .form-update .date')
      const valueRegister = document.querySelector('.update-register .content .form-update .value')

      valueRegister.value = foundRegister.value
      descriptionRegister.value = foundRegister.description
      dateRegister.value = foundRegister.date

      openModal(modalUpdate)
    })
  })
}

btnIncome.addEventListener('click', visibleIncomeForm)
btnExpense.addEventListener('click', visibleExpenseForm)
renderBalance()

const registers = document.querySelectorAll(".register")
showRegisterModal()