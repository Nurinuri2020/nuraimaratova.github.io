import Layout from "../components/layout";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";

export default function AnotherPage() {
    let { t } = useTranslation();
    return (
        <Layout>
            <Head>
                <title>About</title>
                <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Windows_Settings_app_icon.png/1024px-Windows_Settings_app_icon.png" />
            </Head>
            <h1>{t("about:title")}</h1>
            <h2>
                {t("about:introduction", {
                    name: "Nurai",
                    age: 24,
                })}
            </h2>
            <div>
                {t("about:description")}
            </div>
        </Layout>
    );
}
