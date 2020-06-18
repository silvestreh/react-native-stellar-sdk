# epo-stellar-sdk

[![npm version](https://badge.fury.io/js/expo-stellar-sdk.svg)](https://badge.fury.io/js/expo-stellar-sdk)

This package polyfills the [stellar-sdk](https://github.com/stellar/js-stellar-sdk) for React Native.

It includes native randomBytes for iOS and Android via [react-native-randombytes](https://github.com/mvayngrib/react-native-randombytes).

Due to the asynchronous nature of React Native's native bridge, this package adds a new asynchronous method to the Stellar Keypair utility `randomAsync` which returns a promise that resolves to the new randomly generated Keypair.

## Installation

```shell
npm i expo-stellar-sdk
```

## Usage

```javascript
import { Keypair } from '@pigzbe/react-native-stellar-sdk'

const keypair = await Keypair.randomAsync()
const publicKey = keypair.publicKey()
const secretKey = keypair.secret()
```
