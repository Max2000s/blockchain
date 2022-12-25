import { Block } from './block.class.mjs';
import { BlockChain } from './blockchain.class.mjs';

console.log('\n+---------- Starting to create blockchain! ----------+\n')

// create blockchain
let blockchain = new BlockChain();

// mine new blocks
mine();

function mine(){
    console.log('+---------- Starting to mine a block ----------+');
    let block = new Block(Date.now(), {'sender': 'person a', 'reciever': 'person b', 'amount': 120});
    block.mineBlock();
    blockchain.addBlock(block);
    console.log(blockchain.chain);
    mine()
}
