
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let result = [];
    let i = 0;
    if (matrix !== [] && Array.isArray(matrix)){
        while (i < matrix.length) {
    
            if (i % 2 !== 0) {
                result = result.concat(matrix[i].reverse())
            } else {
            result = result.concat(matrix[i]) 
        }         
        i++;
        } 
        return result; 
    } return [];
  
     
  }
