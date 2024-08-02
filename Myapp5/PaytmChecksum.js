"use strict";
const crypto = require("crypto");

class PaytmChecksum {
  static async encrypt(input, key) {
    const cipher = crypto.createCipher("aes-128-cbc", key);
    let encrypted = cipher.update(input, "utf8", "base64");
    encrypted += cipher.final("base64");
    return encrypted;
  }

  static async decrypt(encrypted, key) {
    const decipher = crypto.createDecipher("aes-128-cbc", key);
    let decrypted = decipher.update(encrypted, "base64", "utf8");
    decrypted += decipher.final("utf8");
    return decrypted;
  }

  static async generateSignature(params, key) {
    if (typeof params !== "object" && typeof params !== "string") {
      const error = "string or object expected, " + typeof params + " given.";
      throw new Error(error);
    }
    if (typeof params !== "string") {
      params = PaytmChecksum.getStringByParams(params);
    }
    return PaytmChecksum.generateSignatureByString(params, key);
  }

  static async verifySignature(params, key, checksum) {
    if (typeof params !== "object" && typeof params !== "string") {
      const error = "string or object expected, " + typeof params + " given.";
      throw new Error(error);
    }
    if (params.hasOwnProperty("CHECKSUMHASH")) {
      delete params.CHECKSUMHASH;
    }
    if (typeof params !== "string") {
      params = PaytmChecksum.getStringByParams(params);
    }
    return PaytmChecksum.verifySignatureByString(params, key, checksum);
  }

  static async generateSignatureByString(params, key) {
    const salt = await PaytmChecksum.generateRandomString(4);
    return PaytmChecksum.calculateChecksum(params, key, salt);
  }

  static async verifySignatureByString(params, key, checksum) {
    const paytm_hash = await PaytmChecksum.decrypt(checksum, key);
    const salt = paytm_hash.substr(paytm_hash.length - 4);
    return paytm_hash === PaytmChecksum.calculateHash(params, salt);
  }

  static async generateRandomString(length) {
    return new Promise((resolve, reject) => {
      crypto.randomBytes((length * 3.0) / 4.0, (err, buf) => {
        if (!err) {
          const salt = buf.toString("base64");
          resolve(salt);
        } else {
          console.error("Error occurred in generateRandomString: " + err);
          reject(err);
        }
      });
    });
  }

  static getStringByParams(params) {
    const data = {};
    Object.keys(params)
      .sort()
      .forEach((key) => {
        data[key] =
          params[key] !== null && params[key].toLowerCase() !== null
            ? params[key]
            : "";
      });
    return Object.values(data).join("|");
  }

  static calculateHash(params, salt) {
    const finalString = params + "|" + salt;
    return crypto.createHash("sha256").update(finalString).digest("hex") + salt;
  }

  static async calculateChecksum(params, key, salt) {
    const hashString = PaytmChecksum.calculateHash(params, salt);
    return PaytmChecksum.encrypt(hashString, key);
  }
}

module.exports = PaytmChecksum;
