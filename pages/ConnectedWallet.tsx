interface WalletAddress {
    address: string | undefined
}

function ConnectedWallet({ address }: WalletAddress) {
    return (
        <p className='c-black text-sm text-yellow-500 truncate py-1'>Connected Wallet: <span className='border border-black-500 px-1 rounded-sm text-xs'>{address?.substring(0, 5)}...{address?.substring(address.length, address.length - 5)}</span></p>
    )
}

export default ConnectedWallet