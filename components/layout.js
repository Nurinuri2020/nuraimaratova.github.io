import Link from "next/link";
import classes from "../styles/layout.module.css";
import { useRouter } from "next/router";
import Image from 'next/image'
import React from "react";
import { Mailer } from './mailer'

export default function Layout({ children }) {
    let router = useRouter();
    let now = new Date();

    const onSelectChange = (e) => {
        const locale = e.target.value;
        router.push(router.asPath, router.asPath, {
            locale,
            scroll: false
        })
    }
    let mybutton = process.browser && document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    if(process.browser) {
        window.onscroll = function() {scrollFunction()};
    }

    function scrollFunction() {
        if(process.browser && mybutton?.style) {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        }
    }

    function topFunction() {
        if(process.browser) {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
    }


    return (
        <div className={classes.wholeBlock}>
            <header className={classes.header}>
                <nav className={classes.nav}>
                    <Image src={'/dogovor.svg'} alt={'blog'} width={30} height={30} />
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                    <select name="languages" id="language-select" onChange={onSelectChange}>
                        {router.locales.map((locale, idx) => (
                            <option key={idx} value={locale}>{locale}</option>
                        ))}
                    </select>
                </nav>
            </header>

            <main className={classes.content}>{children}</main>
            <Mailer />

            <footer className={classes.footer}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '53px' }}>
                    <a href="https://github.com/Nurinuri2020" target={'_blank'} rel="noreferrer">
                        <i className="fa fa-github fa-2x"/>
                    </a>
                    <a href="https://t.me/kaia_2022" target={'_blank'} rel="noreferrer">
                        <i className="fa fa-telegram fa-2x"/>
                    </a>
                    <a href="https://www.linkedin.com/in/nurai-maratova-4a4933153/" target={'_blank'} rel="noreferrer">
                        <i className="fa fa-linkedin-square fa-2x"/>
                    </a>
                </div>
                <div>© {now.getFullYear()}</div>
            </footer>
            <button onClick={topFunction} id="myBtn" className={classes.myBtn} title="Go to top"><i className="fa fa-arrow-up" /></button>
        </div>
    );
}
