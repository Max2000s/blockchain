from blockchain import BlockChain


def main():
    block_chain = BlockChain()
    block_chain.create_genesis_block("genesis")

    block_chain.add_block(data="person x  sends 100 Euro to person y")
    block_chain.add_block(data="person y sends 40 Dollars to person z")
    block_chain.add_block(data="person x says person y is intelligent")

    block_chain.print_chain()


if __name__ == '__main__':
    main()
