import { cdr, car } from '../../util/index';

function last_pair(list) {
  const rest = cdr(list);
  if (rest === null) return car(list);
  return last_pair(rest);
}

export default last_pair;
