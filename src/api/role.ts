import service from '@/axios'

export const useRoleApi = (id: number) => {
	return service.get('/data/role/1.json')
}
