function Dict() {                   //Defines function name
    var Book = {                    //Creates Dictionary
        Title:"Long Book",          //List of KVP's
        Date:"12, Dec 2021",
        Author:"Small Potato",
        Pages:341,
        Edition:"2nd",
    };
    delete Book.Author              //Delete specific KVP
    document.getElementById("dictionary").innerHTML = Book.Author;  //Returns verification of delete
}