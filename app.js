document.getElementById('error-message').style.display = 'none';
document.getElementById('spinner').style.display = 'none';
//search book
const searchBook=()=>{
  const searchField=document.getElementById('search-field');
  const searchText=searchField.value;
    searchField.value='';
//if there is nothing in the input field
  if (searchText == '') {
    displayError();
  }
  //fetch data
  else {
      // Display Spinner
      document.getElementById('spinner').style.display = 'block';

      document.getElementById('error-message').style.display = 'none';
      document.getElementById('search-field').textContent ='';

    const url=`https://openlibrary.org/search.json?q=${searchText}`;
  
     fetch(url)
    .then(res=>res.json())
    .then(data=>displayBook(data.docs)) 
  }
}
//error handle
const displayError = () => {
  document.getElementById('spinner').style.display = 'none';
  document.getElementById('error-message').style.display = 'block';
  document.getElementById('book-numbers').textContent = '';
  document.getElementById('book-container').textContent = '';
}
//display result
const displayBook=books=>{
    document.getElementById('book-numbers').textContent = '';
    const bookContainer=document.getElementById('book-container');
    bookContainer.textContent='';

//if no invalid book name or no book found
    if(books.length===0){
      displayError();
      
    }
    else{
      document.getElementById('error-message').style.display = 'none';
   
      document.getElementById('book-numbers').innerText = `Books Found ${books.length}`;
      document.getElementById('spinner').style.display = 'none';
      
      books.slice(0,30)?.forEach(book=>{
      
        const div=document.createElement('div');
        div.innerHTML=`
                    <div class="col shadow-lg rounded">
                      <div class="card h-100">
                        <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="pt-3 card-img-top w-50  mx-auto" alt="..." height="250px">
                        <div class="card-body">
                          <h3 class="card-title text-center heading">${book.title}</h3>
                          <h6 class="card-text  text-center">Author:${book.author_name?book.author_name[0]:''}.</h6>
                          <h6 class="card-text  text-center">Publisher:${book.publisher?book.publisher[0]:''}.</h6>
                          <h6 class="card-text  text-center">${book.first_publish_year?book.first_publish_year:''}.</h6>
                        </div>
                      </div>
                    </div>`;
         bookContainer.appendChild(div);
  })
    }
   
  }
    
  
    
