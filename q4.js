const books = [
    {name:"harry porter",
    author:"willams",
    publishYear:2008},
    {name:"rich dad",
    author:"terder",
    publishYear:2011},
    {name:"lal kitab",
    author:"pandit ji",
    publishYear:2006},
    {name:"rise of moon",
    author:"peter",
    publishYear:2010},
];

const before2010Books = books.filter((e)=>{
   return e.publishYear < 2010
})

const result = before2010Books.map((h)=>{
    return{
        ...h,
        author: h.author.toUpperCase()
    }
})

console.log(result);

// output
// [
//     { name: 'harry porter', author: 'WILLAMS', publishYear: 2008 },
//     { name: 'lal kitab', author: 'PANDIT JI', publishYear: 2006 }
//   ]