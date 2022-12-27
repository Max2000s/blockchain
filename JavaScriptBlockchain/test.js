import { Block } from './block.class.js';
import { BlockChain } from './blockchain.class.js';

console.log('\n+---------- Starting to create blockchain! ----------+\n')
let test = [];

console.log(test[test.length -1]);

// create genesis block 
let genesis_block = new Block();

// create blockchain
let blockchain = new BlockChain(genesis_block);

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
