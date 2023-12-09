import React from 'react'
import Image from 'next/image'
import styles from '../pages/about.module.css'

const About = () => {
  return (
    <div className={styles.about}>
      
      <div className={styles.about_container}>
      <h1 className={styles.about_containertitle}>How To Enter Stake</h1>
        <div className={styles.about_wrapper}>
        <div>
           <Image className={styles.icon} width={600} height={700} src="/tzz.gif" alt='one'
           />

        </div>
       <div className={styles.about_wrappermain}>
       <h1>How To Enter Stake</h1>
          <div className={styles.about_wrappera}>
          <div className={styles.side}>
            <div>
            <Image className={styles.side_image} width={100} height={100} src="/one.webp" alt='one' />
            </div>
            <div className={styles.side_text}>
            
              <h2>CONNECT YOUR WALLET</h2>
              <h3><p>• Connect Your Wallet</p> 
              • Open the staking dApp and connect your preferred wallet (e.g., MetaMask, Trust Wallet)</h3>
            </div>
          </div>
           </div>
           <div className={styles.about_wrappera}>
          <div className={styles.side}>
            <div>
            <Image className={styles.side_image} width={100} height={100} src="/two.png" alt='one' />
            </div>
            <div className={styles.side_text}>
              <h2>Staking Your NFTs</h2>
              <h3><p>• Select Your NFT</p>
              <p>•Click on the Stake button next to the chosen NFT.</p>
              
             </h3>
            </div>
          </div>
           </div>

           <div className={styles.about_wrappera}>
          <div className={styles.side}>
            <div>
            <Image className={styles.side_image} width={100} height={100} src="/three.jfif" alt='one' />
            </div>
            <div className={styles.side_text}>
              <h2>Confirm & Stake</h2>
              <h3><p>• Approve Transaction</p>
              <p>• Confirm the transaction in your wallet to approve staking the selected NFT.</p>
</h3>
            </div>
          </div>
           </div>
           <div className={styles.about_wrappera}>
          <div className={styles.side}>
            <div>
            <Image className={styles.side_image} width={100} height={100} src="/four.png" alt='one' />
            </div>
            <div className={styles.side_text}>
            <h2>Track and Manage Your Staked NFTs</h2>
              <h3><p>• Track Your Staked NFTs</p>
              <p>• Monitor your staked NFTs and their staking duration from the dashboard.</p>
             </h3></div>
          </div>
           </div>
        
        {/* <div className={styles.about_wrapperb}>
          <div className={styles.icon}></div>
          <div className={styles.side}>
            <div className={styles.side_image}></div>
            <div className={styles.side_text}></div>
          </div>
        </div> */}
        </div>
       

      </div>
      </div>
    </div>
  )
}

export default About