import REGEX from './regex.mjs';

function validate(uuid) {
  return typeof uuid === 'string' && REGEX.test(uuid);
}

export default validate;