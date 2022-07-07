// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers (a,b) {
  if(a>=b)
    return a
  else if (b>a)
    return b
}

// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findScaryWord (a)
{
  if(a.length==0)
    return null
  else if (a.length==1)
    return a[0]
  else {
    var longest=0
    for(var i=0; i<a.length; i++) {
      if(a[i].length>longest)
        longest=a[i].length
    }
    for(var i=0; i<a.length; i++) {
      if(a[i].length==longest)
        return a[i]
    }
  }
}

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice (a)
{
  if(a.length==0)
    return 0
  else if (a.length==1)
    return a[0]
  else{
    var sum=0
    for(var i=0; i<a.length; i++)
        sum+=a[i]
    return sum
  }
}

//Progression #3.1
function add(a){
  if(a.length==0)
    return 0
  else{
    var sum=0
    for(var i=0; i<a.length; i++)
      if (typeof(a[i])==="object"||typeof(a[i])==="array")
        throw new Error("Unsupported data type sir or ma'am")
      else if(typeof(a[i])==="string")
        sum+=a[i].length
      else 
        sum+=a[i]
    return sum
  }
}

// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function midPointOfLevels (a)
{
  if(a.length==0)
    return null
  else if (a.length==1)
    return a[0]
  else{
    var average=0
    for(var i=0; i<a.length; i++)
        average+=a[i]
    return average/a.length
  }
}


// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength (a)
{
  if(a.length==0)
    return null
  else if (a.length==1)
    return a[0].length
  else{
    var average=0
    for(var i=0; i<a.length; i++)
        average+=a[i].length
    return average/a.length
  }
}

//Progression 4.3 Mixed Arrays
function avg (a)
{
  if(a.length==0)
    return null
  else{
    var average=0
    for(var i=0; i<a.length; i++)
      if(typeof(a[i])==="string")
        average+=a[i].length
      else
        average+=a[i]
    return parseInt((average/a.length)*100)/100
  }
}

// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];

function uniqueArray (a)
{
    new_arr=[]
    if(a.length==0)
      return null
    else
    {
      for (var i=0; i<a.length; i++)
        if (new_arr.indexOf(a[i])==-1)
          new_arr.push(a[i])
      return(new_arr)
    }
}

// Progression #6: Find elements
// const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function searchElement(a, word) {
  if(a.length==0)
      return null
  else
    if(a.indexOf(word)!=-1)
      return true
    else
      return false
}


// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimesElementRepeated(a, word) {
  var ctr=0
  var index=-1;
  do{
    index=a.indexOf(word,index+1)
    if (index!=-1)
      ctr++
  }while(index!=-1)
  return ctr
}

// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];

function maximumProduct(a) {
  flag=true
  for (var i=0; i<a.length; i++)
    for(var j=0; j<a.length; j++)
      if(a[i][j]!=1)
        flag=false
    if(flag==1)
      return 1
    else
      return 0
}