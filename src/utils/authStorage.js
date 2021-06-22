import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    const token = await AsyncStorage.getItem(`${this.namespace}:token`);
    if(token) {
      const out = JSON.parse(token);
      //console.log("TOKEN ABOUT TO LEAVE FROM STORAGE", out);
      return out;
    }
    return null;
  }

  async setAccessToken(accessToken) {
    await AsyncStorage.setItem(`${this.namespace}:token`, JSON.stringify(accessToken));
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}:token`);
  }
}

export default AuthStorage;