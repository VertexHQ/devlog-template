import styles from '../styles/MusicPlayer.module.css';

export default function MusicPlayer() {
  return (
    <section id="music-player" className={styles.musicPlayer}>
      <div className={styles.playerUI}>
        <div className={styles.playerHeader}>
          <span>WINAMP_V2.exe</span>
          <span>[-][+][x]</span>
        </div>
        <div className={styles.songInfo}>
          <h3>Midnight Coding Session</h3>
          <p>Lo-Fi Beats to Debug To</p>
        </div>
        
        <div className={styles.progressContainer}>
          <div className={styles.progressBar}></div>
        </div>

        <div className={styles.controls}>
          <button className={styles.controlBtn}>⏮</button>
          <button className={`${styles.controlBtn} ${styles.playBtn}`}>▶</button>
          <button className={styles.controlBtn}>⏭</button>
        </div>
      </div>
    </section>
  );
}
