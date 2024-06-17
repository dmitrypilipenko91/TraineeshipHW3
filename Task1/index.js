// created the iterable object with the help of the function describing the iteration process;
const myIterable = {
    from: 2,
    to: 6,
    [Symbol.iterator]() {
      let current = this.from;
      return {
        next: () => {
          if (typeof this.from !== 'number' || typeof this.to !== 'number') {
            throw new Error('from and to must be numbers');
          }
          if (this.to < this.from) {
            throw new Error('to must be greater than from');
          }
          if (current <= this.to) {
            return { value: current++, done: false };
          } else {
            return { done: true };
          }
        }
      };
    }
  };
 
// example of the iteration;  
for (let item of myIterable) {
    console.log(item);
}