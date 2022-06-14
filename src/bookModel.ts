import { IBook } from "./interfaces";
export const getBooks=(rawBooks:any[])=>{
    const books:IBook[]=[];
    rawBooks.forEach(rawBook=>{
        books.push({
            title:rawBook.title,
            author:rawBook.authors?rawBook.authors[0].name:'(unknown)'})});
return books;
}