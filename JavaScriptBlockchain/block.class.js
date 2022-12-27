import sha256 from 'js-sha256'

export class Block {
  constructor(time = Date.now(), data = {}) {
    this.timestamp = time;
    this.data = data;
    this.previous_hash = "";
    this.nonce = 0;
    this.difficulty = "000000";
  }

  
  hashData() {
    return sha256(
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
