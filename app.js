document.getElementById('error-message').style.display = 'none';
    
const searchBook=()=>{
  const searchField=document.getElementById('search-field');
  const searchText=searchField.value;
    searchField.value='';
    if (searchText == '') {
   
      document.getElementById('error-message').style.display = 'block';
  }
  else {
    
      document.getElementById('error-message').style.display = 'none';

      // Clear Search Result
      document.getElementById('search-field').textContent ='';

    const url=`https://openlibrary.org/search.json?q=${searchText}`;
  
     fetch(url)
    .then(res=>res.json())
    .then(data=>displayBook(data.docs.slice(0,30))) 
  }
}

const displayBook=books=>{
    document.getElementById('error-message').textContent = '';
    const bookContainer=document.getElementById('book-container');
    bookContainer.textContent='';
 
  
      books.forEach(book=>{
      
          const div=document.createElement('div');
          div.innerHTML=`
                      <div class="col shadow-lg rounded">
                        <div class="card h-100">
                          <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="pt-3 card-img-top w-50 h-50 mx-auto" alt="...">
                          <div class="card-body">
                            <h3 class="card-title text-center">${book.title}</h3>
                            <h6 class="card-text  text-center">Author:${book.author_name[0]?book.author_name[0]:''}.</h6>
                            <h6 class="card-text  text-center">Publisher:${book.publisher[0]?book.publisher[0]:''}.</h6>
                            <h6 class="card-text  text-center">${book.publish_date[0]?book.publish_date[0]:''}.</h6>
                          </div>
                        </div>
                      </div>`;
           bookContainer.appendChild(div);
    })
  }
    
