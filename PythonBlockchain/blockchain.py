from block import Block


class BlockChain:
    """this class will represent the whole blockchain"""

    def __init__(self):
        self.__chain: list[Block] = list()

    def print_chain(self):
        for block in self.__chain:
            block.print_block_hash()

    def create_genesis_block(self, data: str):
        """creating the first block with a default hash value"""
        block = Block(
            data=data,
            previous_hash=64 * "0",
            index=0
        )
        self.__chain.append(block)

    def add_block(self, data):
        """this method adds a block to the existing blockchain"""
        block = Block(
            data=data,
            previous_hash=self.__chain[(len(self.__chain) - 1)].hash,
            index=len(self.__chain)
        )
        self.__chain.append(block)
