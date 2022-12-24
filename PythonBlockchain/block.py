import hashlib


class Block:
    """this class will represent one block in the blockchain"""

    def __init__(self, data: str, previous_hash, index: int):
        """initializer of the block"""
        self.previous = previous_hash
        self.index = index
        self.data = data
        self.hash = hashlib.sha256(f"{data}{self.previous}".encode('utf-8'))

    def print_block_hash(self):
        """this helper function prints the block hash"""
        print(self.hash.hexdigest())
