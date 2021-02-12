import React from 'react'
import { Layout, Menu } from 'antd'
import { useDispatch } from 'react-redux'
import useIsLoggedIn from '../hooks/useIsLogedIn'
import { logoutUser } from '../redux/auth/actions'

const { Header } = Layout

const Navigation = () => {
  const dispatch = useDispatch()
  const [isLoggedIn] = useIsLoggedIn()

  const logout = () => {
    dispatch(logoutUser())
  }

  return (<Layout className="layout">
    <Header>
      <Menu orientation="right" theme="dark" mode="horizontal">
        {!isLoggedIn && <Menu.Item key="1">Signup</Menu.Item>}
        {!!isLoggedIn && <Menu.Item onClick={logout} key="1">Logout</Menu.Item>}
      </Menu>
    </Header>
  </Layout>
  )
}
export default Navigation
