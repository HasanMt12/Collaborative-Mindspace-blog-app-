import Featured from "@/components/featured/HeroSection";
import styles from "./globals.css";
export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  return (
    <div className={styles.container}>
      <Featured />
    </div>
  )
}
