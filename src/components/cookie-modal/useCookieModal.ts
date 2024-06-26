import { COOKIES_ENUM } from "@/constants/cookie-enum";
import { setCookie } from 'cookies-next';
import { useState } from "react";

export function useCookieModal() {
  const [showModal, setShowModal] = useState(true)
  const [showManagePanel, setShowManagePanel] = useState(false)

  // Cookies state
  const expirationDate = new Date();
  expirationDate.setFullYear(expirationDate.getFullYear() + 1);

  const [checkbox, setCheckbox] = useState({
    statistics_cookie: true,
    preferences_cookie: false,
    marketing_cookie: false,
  })

  function handleCheckboxChange(name: string) {
    return function (checked: boolean) {
      setCheckbox((prevState) => ({
        ...prevState,
        [name]: checked,
      }));
    }
  }

  function acceptCookieConsent() {
    setCookie("cookie_consent", "yes", { expires: expirationDate })
    setShowModal(false)
  }

  function acceptPartialCookies() {
    acceptCookieConsent()
    if (checkbox.preferences_cookie) {
      setCookie(COOKIES_ENUM.PREFERENCES_PRIVACY, true, { expires: expirationDate })
    } else {
      setCookie(COOKIES_ENUM.PREFERENCES_PRIVACY, false, { expires: expirationDate })
    }
    if (checkbox.statistics_cookie) {
      setCookie(COOKIES_ENUM.STATISTICS_PRIVACY, true, { expires: expirationDate })
    } else {
      setCookie(COOKIES_ENUM.STATISTICS_PRIVACY, false, { expires: expirationDate })
    }
    if (checkbox.marketing_cookie) {
      setCookie(COOKIES_ENUM.MARKETING_PRIVACY, true, { expires: expirationDate })
    } else {
      setCookie(COOKIES_ENUM.MARKETING_PRIVACY, false, { expires: expirationDate })
    }
  }

  function acceptAllCookies() {
    acceptCookieConsent()
    setCookie(COOKIES_ENUM.PREFERENCES_PRIVACY, true, { expires: expirationDate })
    setCookie(COOKIES_ENUM.STATISTICS_PRIVACY, true, { expires: expirationDate })
    setCookie(COOKIES_ENUM.MARKETING_PRIVACY, true, { expires: expirationDate })
  }

  function closeModal() {
    setShowModal(false)
  }

  return {
    checkbox,
    showModal,
    showManagePanel,
    setShowManagePanel,
    handleCheckboxChange,
    acceptPartialCookies,
    acceptAllCookies,
    closeModal
  }
}