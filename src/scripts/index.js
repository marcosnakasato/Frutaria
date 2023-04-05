function render(array){
    const mainList = document.querySelector('.list__container')

    mainList.innerHTML = ''

    array.forEach((product) => {
        const card = creatCard(product)

        mainList.appendChild(card)
    })
}

function creatCard(product){
    const listItem = document.createElement('li')
    const figure = document.createElement('figure')
    const productImage = document.createElement('img')
    const productDepartment = document.createElement('figcaption')
    const buyButton = document.createElement('button')

    listItem.classList.add('list__item')
    productImage.src = product.img
    productImage.alt = product.name
    productDepartment.innerText = product.department

    figure.append(productImage, productDepartment)
    
    const componentCard = createComponentsList(product.components)

    buyButton.innerText = 'Comprar'

    listItem.append(figure, componentCard, buyButton)

    return listItem
}


function createComponentsList(componentsList) {
    const componentsMainList = document.createElement('ol')
  
    componentsList.forEach(component => {
      const componentsItem = document.createElement('li')
  
      componentsItem.innerText = component
  
      componentsMainList.appendChild(componentsItem)
    })
  
    return componentsMainList
  }

function renderFilter(array) {
    const filterButtons = document.querySelectorAll('.filter__item')    
    filterButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        
        if(event.target.innerText === 'Todos os produtos') {
          render(array)
        } else {
            
          const filteredProducts = productFilter(array, event.target.innerText)
    
          render(filteredProducts)
        }
      })
    })
  }

function productFilter(array, departmentName) {
    const filteredProducts = array.filter(product => {
      return product.department === departmentName
    })
    return filteredProducts
  }

  function renderSearch(array) {
    const searchInput = document.querySelector('.search__container > input')
    const searchButton = document.querySelector('.search__button')
  
    // searchButton.addEventListener('click', () => {
    //   const productFound = searchProduct(array, searchInput.value)
  
    //   render([productFound])
    // })
  
    searchInput.addEventListener('keyup', () => {
      const productFound = searchProduct(array, searchInput.value)
      render(productFound)
    })
  }
  
  function searchProduct(array, searchElement) {
    // const productsFound = array.find(product => {
    //   return product.name.toLowerCase() === searchElement.toLowerCase().trim()
    // })
  
      const productsFound = array.filter(product => {
        
      return product.name.toLowerCase().includes(searchElement.toLowerCase().trim()) || product.department.toLowerCase().includes(searchElement.toLowerCase().trim()) 
  })
  
    return productsFound
  }
  
  render(products)
  
  renderFilter(products)
  
  renderSearch(products)


  
