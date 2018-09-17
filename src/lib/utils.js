import { Base64 } from 'js-base64';

export function generateHeader(username, password) {
  console.log(username, password, `Basic ${Base64.encode(`${username}:${password}`)}`)
  return {
    Authorization: `Basic ${Base64.encode(`${username}:${password}`)}`,
  };
}

export default {
};
