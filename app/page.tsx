import Image from 'next/image'
import { Inter } from '@next/font/google'
import Head from './head'
import Header from './Header'
import Footer from './Footer'
import Link from 'next/link'
//import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

    export default function Home() {
            return (
            <div>
            <Header/>
            <Link href="/teaching">Teaching</Link>
                <Link href="teaching/madrasah">Madrasah</Link>
                <Link href="teaching/university">University</Link>
                <div>Hello World from Haq nawaz PIAIC</div>
            <Footer/>
            </div>
            )
    }