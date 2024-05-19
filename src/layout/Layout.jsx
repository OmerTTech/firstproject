import React, { useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import az from '../languages/az.json'
import en from '../languages/en.json'
import { IntlProvider } from "react-intl";


const messages = {
  az: az,
  en: en
}


const Layout = (props) => {
  const [locale, setLocale] = useState('az')

  const handleLocaleChange = (e) => {
    setLocale(e)
  }

  return (
    <div>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <Header locale={locale} onChange={handleLocaleChange}/>
        <main>{props.children}</main>
        <Footer />
      </IntlProvider>
    </div>
  );
};

export default Layout;
