import Layout from "../components/layout";
import useTranslation from "next-translate/useTranslation";
import Image from 'next/image'
import Head from "next/head";

export default function Home() {
    let { t } = useTranslation();

    return (
        <Layout>
            {/*<Image src={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'}*/}
            {/*width={500}*/}
            {/*       height={300}*/}
            {/*/>*/}
            <Head>
                <title>Home</title>
                <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Windows_Settings_app_icon.png/1024px-Windows_Settings_app_icon.png" />
            </Head>
            <h1>{t("common:greeting")}</h1>
        </Layout>
    );
}
