export class BlockChain {
  constructor(genesisBlock) {
    this.chain = [];

    // adding a genesis block as first block
    this.chain.push(Object.freeze(genesisBlock));
  }

  addBlock(block) {
    block.previous_hash = this.getPreviousBlock().hashData();
    this.chain.push(Object.freeze(block));
  }

  isValid() {
    let isInvalid = this.chain.find((currentBlock, index) => {
      let previousBlock = this.chain[index - 1];
      return (
        previousBlock & (previousBlock.hashData() != currentBlock.previous_hash)
      );
    });
    if (isInvalid) {
      return false;
    } else {
      return true;
    }
  }

  getPreviousBlock() {
    return this.chain[this.chain.length - 1];
  }
}