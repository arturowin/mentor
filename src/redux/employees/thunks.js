import * as types from './types'
import { fetchEmployeesLoading, fetchEmployeeGroupsLoading } from './actions'
import * as service from './service'

export const fetchEmployees = () => {
  return async (dispatch) => {
    dispatch(fetchEmployeesLoading())
    try {
      const res = await service.fetchEmployees()
      const employees = res.map((employee) => ({
        key: employee.id,
        first_name: employee.first_name,
        last_name: employee.last_name,
        gender: employee.gender,
        job_title: employee.job_title
      }))
      dispatch({ type: types.FETCH_EMPLOYEES_LOADED, payload: employees })
    } catch (err) {
      dispatch({ type: types.FETCH_EMPLOYEES_ERROR })
    }
  }
}

export const fetchEmployeeGroups = () => {
  return async (dispatch) => {
    dispatch(fetchEmployeeGroupsLoading())
    try {
      const res = await service.fetchEmployeeGroups()
      dispatch({ type: types.FETCH_EMPLOYEE_GROUPS_LOADED, payload: res })
    } catch (err) {
      dispatch({ type: types.FETCH_EMPLOYEES_ERROR })
    }
  }
}

export const createGroup = (data) => {
  return async (dispatch) => {
    try {
      const res = await service.createGroup(data)
      dispatch({ type: types.CREATE_GROUP_SUCCESS, payload: res })
    } catch (err) {
      dispatch({ type: types.CREATE_GROUP_ERROR })
    }
  }
}
