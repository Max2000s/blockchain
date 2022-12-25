export class BlockChain {
  constructor() {
    this.chain = [];
  }

  addBlock(block) {
    block.previous_hash = this.getPreviousBlock().hashBlock();
    this.chain.push(Object.freeze(block));
  }

  isValid() {
    let isInvalid = this.chain.find((currentBlock, index) => {
      let previousBlock = this.chain[index - 1];
      return (
        previousBlock & (previousBlock.hashBlock != currentBlock.previous_hash)
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