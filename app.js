function slasher(arr, howMany){
    arr.splice(0, howMany);
    return arr
  }
  
  slasher([1, 2, 3, 5, 7, 20, 43], 4);