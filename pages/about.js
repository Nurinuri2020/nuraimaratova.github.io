import Layout from "../components/layout";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import Image from 'next/image'

export default function AnotherPage() {
    let { t } = useTranslation();
    return (
        <Layout>
            <div className={'container'}>
                <div className={'row d-flex justify-content-center'}>
                    <div className={'col-xs-12 col-md-9 col-sm-9'}>
                        <Head>
                            <title>Nurai Maratova</title>
                            <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Windows_Settings_app_icon.png/1024px-Windows_Settings_app_icon.png" />
                        </Head>
                        {/*<h1>{t("about:title")}</h1>*/}
                        <h2>
                            <b>
                                {t("about:introduction", {
                                    name: "Nurai",
                                    age: 24,
                                })}
                            </b>
                        </h2>
                        <br />
                        <div>
                            <div style={{fontWeight: 'bold', fontSize: '1.5em'}}>{t("about:description")} : </div>
                            <br />
                            <ul className="a">
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                                <li>React</li>
                                <li>Next.js</li>
                                <li>GraphQL</li>
                                <li>Bootstrap</li>
                                <li>Styled Components</li>
                                <li>Git</li>
                                <li>Website Performance</li>
                            </ul>
                        </div>
                        <br />
                        <div>
                            <div style={{fontWeight: 'bold', fontSize: '1.5em'}}>Projects :</div>
                            <br />
                            <div className={'p-3'} style={{border: '1px solid', borderRadius: '24px'}}>
                                <div className={'d-flex align-items-center justify-content-between'}>
                                    Portfolio 2k22 (this website)
                                    <Image src={'/dogovor.svg'} width={'50px'} height={'50px'} />
                                </div>
                                <div>
                                    Next.js, TypeScript, Node.js, Bootstrap
                                </div>
                            </div>
                            <br />
                            <div className={'p-3'} style={{border: '1px solid', borderRadius: '24px'}}>
                                <a href="https://jmart.kz/" target={'_blank'} rel="noreferrer">
                                <div className={'d-flex align-items-center justify-content-between'}>
                                        Jmart.kz
                                        <Image src={'/jusan.png'} width={'50px'} height={'50px'} />
                                </div>
                                </a>
                                <div>
                                    TypeScript, React, Node.js, Redux-Saga, Redux-Toolkit, Bootstrap
                                </div>
                            </div>
                            <br />
                            <div className={'p-3'} style={{border: '1px solid', borderRadius: '24px'}}>
                                <a href="https://www.npmjs.com/package/pyatka-ui" target={'_blank'} rel="noreferrer">
                                    <div className={'d-flex align-items-center justify-content-between'}>
                                            UI-kit(npm library)
                                            <Image src={'/pyatka.png'} width={'50px'} height={'50px'} />
                                    </div>
                                </a>
                                <div>
                                    TypeScript, React, Styled-Components
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
