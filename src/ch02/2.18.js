import { cons, car, cdr } from '../../util/index';

function reverse(list) {
  return reverse_iter();

  function reverse_iter(items = list, result = null) {
    if (items === null) return result;
    return reverse_iter(cdr(items), cons(car(items), result));
  }
}

export default reverse;
