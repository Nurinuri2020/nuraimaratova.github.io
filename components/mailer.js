import emailjs from 'emailjs-com';
import useTranslation from "next-translate/useTranslation";
import Layout from "./layout";

export const Mailer = () => {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_78k9vtr', 'template_y3mipu9', e.target, 'TyEtbrWDf_hU1gcLm')
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    let { t } = useTranslation();
    return (
        <div className={'container'}>
            <div className={'row d-flex justify-content-center'}>
                <div className={'col-9'}>
                    <h4 style={{display: 'flex', justifyContent: 'center', textAlign: 'center'}}>{t("common:contact")}</h4>
                    <form className={'row'} onSubmit={sendEmail}>
                        <label>{t("common:name")}</label>
                        <input type="text" name={'name'} id="name" className={'form-control'}/>

                        <label>Email</label>
                        <input type="email" name={'user_email'} id="email" className={'form-control'}/>

                        <label>{t("common:message")}</label>
                        <textarea name={'message'} rows="4" id="message" className={'form-control'} />
                        <input type="submit" value={t("common:send")} id="submit" className={'form-control btn'} style={{marginTop: '30px'}}/>
                    </form>
                </div>
            </div>
        </div>
    )
}

// export default Mailer;
