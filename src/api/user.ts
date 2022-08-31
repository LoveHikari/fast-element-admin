import service from '@/axios'

export const useUserInfoApi = () => {
	return service.get('/app/common/user/info')
}

export const updatePasswordApi = (data: any) => {
	return service.put('/data/success.json', data)
}

export const useUserApi = (id: number) => {
	return service.get('/data/user/1.json')
}
