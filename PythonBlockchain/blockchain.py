import hashlib


class Block:
    """this class will represent one block in the blockchain"""

    def __init__(self, data: str, previous_hash, index: int):
        """initializer of the block"""
        self.previous = previous_hash
        self.index = index
        self.data = data
        self.hash = hashlib.sha256(f"{data}{self.previous}".encode('utf-8'))

    def print_block(self):
        print(self.data)
        print(self.hash)


class BlockChain:
    """this class will represent the whole blockchain"""

    def __init__(self):
        self.__chain: list[Block] = list()

    def print_chain(self):
        for block in self.__chain:
            block.print_block()

    def create_genesis_block(self, data: str):
        """creating the first block with a default hash value"""
        block = Block(data=data, previous_hash=64*"0", index=0)
        self.__chain.append(block)

    def add_block(self, data):
        """this method adds a block to the existing blockchain"""
        block = Block(data=data, previous_hash=self.__chain[(len(self.__chain) - 1)].hash, index=len(self.__chain))
        self.__chain.append(block)


def main():
    block_chain = BlockChain()
    block_chain.create_genesis_block("genesis")

    for i in range(0,10):
        block_chain.add_block(data=f"block data {i}")

    block_chain.print_chain()


if __name__ == '__main__':
    main()
