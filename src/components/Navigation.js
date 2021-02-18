import React from 'react'
import { Layout, Menu } from 'antd'
import { useDispatch } from 'react-redux'
import useIsLoggedIn from '../hooks/useIsLogedIn'
import { logoutUser } from '../redux/auth/actions'
import { useTranslation } from 'react-i18next';
import useLocalStorage from "../hooks/useLocalStorage";

const { Header } = Layout

const Navigation = () => {
  const dispatch = useDispatch()
  const isLoggedIn = useIsLoggedIn();
  const { i18n } = useTranslation();
  const [language, setLanguage] = useLocalStorage('language', 'en')

  const logout = () => {
    dispatch(logoutUser());
  }

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  }

  return (<Layout className="layout">
    <Header>
      <div style={{float: 'right'}}> 
      <Menu theme="dark" mode="horizontal">
        <Menu.Item onClick={() => changeLanguage('am')} key="2">Հայ</Menu.Item>
        <Menu.Item onClick={() => changeLanguage('en')} key="3">eng</Menu.Item>
        {!isLoggedIn && <Menu.Item key="1">Signup</Menu.Item>}
        {!!isLoggedIn && <Menu.Item onClick={logout} key="1">Logout</Menu.Item>}
      </Menu>
      </div>
    </Header>
  </Layout>
  )
}
export default Navigation
