import service from '../utils/request';

export const login = (data) => {
    console.log(data);
    return service({
        url: 'login',
        method: 'POST',
        data,
    });
};
