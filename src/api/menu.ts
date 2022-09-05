import service from "@/axios";

export const useAuthorityListApi = () => {
  return service.get("/data/menu/authority.json");
};

const menuApi = {
  getTreeList: () => {
    return service.get("/app/common/menu/treeList");
  },
  getDetail: (id: number) => {
    return service.get(`/app/common/menu/${id}`);
  },
  add: (data: any) => {
    return service.post("/api/v1/Menu", data);
  },
  update: (id: number, data: any) => {
    return service.patch(`/api/v1/Menu/${id}`, data);
  }
};

export default menuApi;
