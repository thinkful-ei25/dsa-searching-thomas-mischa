/*
  library: [[shelf-1 range 1-7   {title: , call-number: 1, },{title: , call-number: 2, },{title: , call-number:3 , }],[shelf-1 range 8-15],[],[]]
  call-number is 3
  input : call-number, library

  shelf = binarysearch(library) --> in search, check if call-number is in range of shelf otherwise
  {shelf: 1, locationOnShelf: 3} = binarysearch(shelf) --> search will match the array index wtih the call-number return array index




  output: the location of the book


*/