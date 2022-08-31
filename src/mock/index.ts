import { MockMethod } from 'vite-plugin-mock'
export default [
    {
        url: '/app/common/user/info',
        method: 'get',
        response: () => {
            return {
                "code": 0,
                "msg": "success",
                "data": {
                    "id": 1,
                    "username": "admin",
                    "email": "babamu@126.com",
                    "avatar": "https://cdn.maku.net/images/avatar.png"
                }
            }
        },
    },
    {
        url: '/app/common/user/login',
        method: 'post',
        response: {
            "code": 0,
            "data": {
                "assessToken": "30c94f4b-5094-46ab-b463-09e88be0bca2",
                "token_type": "bearer",
                "refresh_token": "2b367597-dd05-4ed0-a968-56e0e7eabde7",
                "expires_in": 86400,
                "scope": "all"
            }
        }
    },
    {
        url: '/app/common/success',
        method: 'post',
        response: {
            "code": 0,
            "msg": "success",
            "data": null
        }
    },
    {
        url: '/app/common/del',
        method: 'post',
        response: {
            "code": 0,
            "msg": "success",
            "data": null
        }
    }
] as MockMethod[]
