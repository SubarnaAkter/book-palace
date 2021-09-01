const searchBook=()=>{
    const searchField=document.getElementById('search-field');
     const searchText=searchField.value;
     searchField.value='';

    const url=`https://openlibrary.org/search.json?q=${searchText}`;

    fetch(url)
    .then(res=>res.json())
    .then(data=>displayBook(data.docs))
}

   
const displayBook=books=>{
    const bookContainer=document.getElementById('book-container');
for(const book of books){

    const div=document.createElement('div');
    div.innerHTML=`
                <div class="col shadow-lg rounded">
                  <div class="card h-100">
                    <img src="https://covers.openlibrary.org/b/id/${book.cover_i}.jpg" class="pt-3 card-img-top w-50 h-50 mx-auto" alt="...">
                    <div class="card-body">
                      <h3 class="card-title text-center">${book.title}</h3>
                      <h6 class="card-text  text-center">${book.author_name[0]}.</h6>
                      <h6 class="card-text  text-center">${book.publish_date[0]}.</h6>
                    </div>
                  </div>
                </div>`;
     bookContainer.appendChild(div);
}
}