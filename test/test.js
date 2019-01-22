import {Keypair, randomBytesAsync} from '../stellar-sdk';

describe('Test Keypair', () => {
    it('Creates Keypair', () => {
        expect.assertions(1);
        return expect(Keypair.randomAsync()).resolves.toHaveProperty('secret');
    });

    it('Throws Error', () => {
        expect(() => Keypair.random()).toThrow();
    });
});

describe('Test randomBytesAsync', () => {
    it('Has randomBytesAsync method', () => {
        expect(typeof randomBytesAsync).toEqual('function');
    });
});
