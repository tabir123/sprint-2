function range(start, stop, step = 1, circularFill = false, map = (value) => value) {
    if (typeof stop === 'undefined') {
     stop = start;
     start = 0;
    }
   
    if (step > 0 && start >= stop) {
     step = -step;
    }
   
    if (step < 0 && start <= stop) {
     return [];
    }
    
    let index = start;
    const result = [];
    
    if (circularFill) {
     const size = start + stop;
     for (index; step > 0 ? index < size : index > size; index += step) {
      result.push(map(index % stop));
     }
     return result;
    }
    
    for (index; step > 0 ? index < stop : index > stop; index += step) {
     result.push(map(index));
    }
   
    return result;
   }