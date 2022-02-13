import Head from "next/head";
import Image from "next/image";
import { Footer } from "../components/HomePage/Footer";
import { Header } from "../components/HomePage/Header";
import Navbar from "../components/HomePage/Navbar";
import MemoryCard from "../components/MemoryCard";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Footer />
    </div>
  );
}
