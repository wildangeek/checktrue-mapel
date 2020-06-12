// I'm Stuck on this, Inspired by Our beloved Impact Byte Mentor => Sarah Gushef

const mapel1 =['Math','English','Programming']
const mapel2 =['Geography','Spanish','Programming']

function checkTrue(array1,array2){
  let result = false;

  for (let i =0; i< array1.length;i++){
    if(array2.includes(array1[i])){
      result =true;
    }
  }
  return result;
}
console.log(checkTrue(mapel1,mapel2))