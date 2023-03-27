// const books = [ { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925, genre: 'Fiction' }, { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960, genre: 'Fiction' }, { id: 3, title: '1984', author: 'George Orwell', year: 1949, genre: 'Science Fiction' }, { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813, genre: 'Fiction' }, { id: 5, title: 'The Hobbit', author: 'J.R.R. Tolkien', year: 1937, genre: 'Fantasy' }, ];

// const elList = document.querySelector(".list")
// books.sort((a,b) =>  a.year - b.year)

// function creatBooks(arr) {
//     arr.forEach(Item => {
//         let elItem = document.createElement("li")
//         let elTitle = document.createElement("h2")
//         let elText = document.createElement("p")
//         let elText1 = document.createElement("p")
//         let elText2 = document.createElement("p")

//         elTitle.textContent = Item.title
//         elText.textContent = Item.author
//         elText1.textContent = Item.genre
//         elText2.textContent = Item.year
//         elItem.append(elTitle,elText,elText1,elText2)
//         elList.appendChild(elItem)
//     });
// }
// creatBooks(books,elList)

const elList1 = document.querySelector(".list1")
const elInput = document.querySelector(".input")
const elBtn = document.querySelector(".btn")

const students = [ { id: 1, name: 'Alice', grade: 'A' }, { id: 2, name: 'Bob', grade: 'C' }, { id: 3, name: 'Charlie', grade: 'B' }, { id: 4, name: 'Dave', grade: 'A' }, { id: 5, name: 'Eve', grade: 'B' }, ];
let elItem = document.createElement("li")
let elTitle = document.createElement("h2")
let elTit = document.createElement("h2")
let elText = document.createElement("p")
let text = document.createElement("h2")
elItem.append(elTitle,elTit,elText,text)
elList1.appendChild(elItem)
elBtn.addEventListener("click", function(evt) {
    evt.preventDefault();
    
    const search = () => {
        if(elInput.value > 5) {
            text.textContent = "Bunaqa malumot yuq?"
            text.style.color = "red"
            elTitle.textContent = ""
            elTit.textContent = ""
            elText.textContent = ""
            elInput.value = ""
        } else{
            const elfilInp = students.filter((item) => item.id == elInput.value)
            const elFilSutdent = elfilInp.map((filItem) => {
                elTitle.textContent = filItem.id
                elTit.textContent = filItem.name
                elText.textContent = filItem.grade
                elInput.value = ""
            })
            return elFilSutdent;
        }
    }
    console.log(search());        
})
