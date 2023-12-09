import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import Navigation from "../components/Navigation";
import Header from '../pages/Header'
import About from '../pages/About'

const Home: NextPage = () => {
  const router = useRouter();

  return (
    
   
    <div className={styles.container}>
      <Header/>
      <div className={styles.nftBoxGrid}>

<div
  className={styles.optionSelectBox}
  role="button"
  onClick={() => router.push(`/stake`)}
>
  {/* Staking an NFT */}
  <Image src="/IMG_4400 (1).png" alt="token" width={64} height={64} />
  <h2 className={styles.selectBoxTitle}>Stake Your NFTs</h2>
  <p className={styles.selectBoxDescription}>
    Use the staking engine <b>TDZ</b>{" "}
earn more <b>$JOKEZ</b> token.
  </p>
</div>
</div>
       
      <About/>
      
      
      
    </div>
  );
};

export default Home;
