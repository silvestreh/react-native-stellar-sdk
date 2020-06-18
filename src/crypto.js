import createHash from 'create-hash'
import * as Random from 'expo-random';

const randomBytesAsync = Random.getRandomBytesAsync;

const randomBytes = () => {
  throw new Error('Use crypto.randomBytesAsync for React Native')
}

export {
  randomBytesAsync,
  randomBytes,
  createHash
}

export default module.exports
