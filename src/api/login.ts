import service from '@/axios'

export const useLoginApi = (data: any) => {
	return service.post('/app/common/user/login', data, {
		auth: {
			username: 'web',
			password: '123456'
		},
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	})
}

export const useLogoutApi = () => {
	return service.post('/data/success.json')
}
