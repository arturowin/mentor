import _ from 'lodash';

export const areAllSet = (obj) => _.isObject(obj) && Object.values(obj).every(val => !!val);