import sysConfig from '@/config';
import Cookies from 'js-cookie';

/**
 * 获取Token
 */
export function getToken() {
    return Cookies.get(sysConfig.tokenName);
}

/**
 * 设置Token
 * @param String token 用户Token
 */
export function setToken(token) {
    return Cookies.set(sysConfig.tokenName, token);
}

/**
 * 移除Token
 */
export function removeToken() {
    return Cookies.remove(sysConfig.tokenName);
}
