let books = []


const displayBooks =()=>{
  const bookDisplay = document.getElementById('bookTable')
  for(let i = 0; i < books.length; i++ ){
    const shelf = books[i]

    bookDisplay.innerHTML += `
    <tr>
      <th scope="row">${i + 1}</th>
      <td>${shelf.nameInput}</td>
      <td>${shelf.authorInput}</td>
      <td>${shelf.pageInput}</td>
      <td>${shelf.priceInput}</td>
     
    </tr>
    `
  }


  // const mappedBook = books.map((shelf, index)=>{
    

  //   return `<tr>
  //     <th scope="row">${index + 1}</th>
  //    <td>${shelf.nameInput}</td>
  //    <td>${shelf.authorInput}</td>
  //    <td>${shelf.pageInput}</td>
  //     <td>${shelf.priceInput}</td>
     
  //   </tr>
  //   `
  // })

  // bookDisplay.innerHTML = mappedBook
} 

const getExistingBooks =()=>{
  const storage = JSON.parse(localStorage.getItem('bookStorage'))
  if(storage){
    books= storage
    console.log(books)
    displayBooks()
  }
}

getExistingBooks()


const displayPrice = ()=>{
  const totalPrice = books.reduce((a, book)=>{
    return  Number( book.priceInput) + a
  }, 0)
  console.log(totalPrice)
  
}





const addBook=()=>{
  
  let nameInput = document.getElementById('bookName').value
  let authorInput = document.getElementById('author').value
  let pageInput = document.getElementById('pages').value
  let priceInput = document.getElementById('price').value
  let newBook = {nameInput, authorInput, pageInput, priceInput}
  
  books.push(newBook)

  localStorage.setItem('bookStorage', JSON.stringify(books))
  displayBooks()
     nameInput = document.getElementById('bookName').value =''
   authorInput = document.getElementById('author').value =''
   pageInput = document.getElementById('pages').value =''
   priceInput = document.getElementById('price').value = ''
   
   console.log(books)
   
  }


const searchBook = ()=>{
  const searchInput = document.getElementById('searchInput')
  if(searchInput.value.trim() ===''){
    console.log('input something')
    return

  }
  
  const searchResult = books.find((book, index)=>{
    return (book.nameInput === searchInput.value) || (book.authorInput == searchInput.value)
  })
  console.log(searchResult, searchInput.value)
}