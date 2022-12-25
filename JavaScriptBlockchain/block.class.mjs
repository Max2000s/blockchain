import { B } from "./sha256.js";

export class Block {
  constructor(time = Date.now(), data = {}) {
    this.timestamp = time;
    this.data = data;
    this.previous_hash = "";
    this.nonce = 0;
    this.difficulty = "000";
  }

  hashData() {
    return B.sha256(
      this.nonce +
        this.previous_hash +
        this.timestamp +
        JSON.stringify(this.data)
    );
  }

  mineBlock() {
    let hash = this.hashData();
    while (!hash.startsWith(this.difficulty)) {
      this.nonce++;
      hash = this.hashData();
    }
  }
}
