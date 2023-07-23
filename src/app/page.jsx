import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import Hero from "./components/Hero";
import KesatriaMuda from "./components/KesatriaMuda";
import KontribusiMasaDepan from "./components/KontribusiMasaDepan";
import VideoSejarah from "./components/VideoSejarah";
import SelamatDatang from "./components/SelamatDatang";

export const metadata = {
  title: "Beranda · PPSMB Kesatria 2023",
  description:
    "PPSMB Kesatria merupakan masa orientasi kepada Mahasiswa Baru Teknik UGM 2023 yang bertujuan untuk memperkenalkan lingkungan Teknik UGM kepada para Mahasiswa Baru",
};

export default function Home() {
  return (
    <main className="overflow-y-hidden">
      <Hero />
      <SelamatDatang />
      <VideoSejarah />
      <KesatriaMuda />
      <KontribusiMasaDepan />
    </main>
  );
}
