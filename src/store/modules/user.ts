import { defineStore } from "pinia";
import { ref } from "vue";
import { useUserInfoApi } from "@/api/user";
import storage from "@/storage";
import { useLoginApi } from "@/api/login";

const useUserStore = defineStore("userStore", function() {

  const token = ref<string>(storage.get("token") || "");
  const info = ref<any>(storage.get("userInfo") || undefined);

  function setToken(val: any) {
    token.value = val;
    storage.set("token", val);
  }

  function set(val: any) {
    info.value = val;
    storage.set("userInfo", val);
  }

  function get() {
    useUserInfoApi().then((res: any) => {
      console.log(res);
      set(res.data);
    });
  }
function login(loginForm: any) {
    return useLoginApi(loginForm).then((res: any) => {
      setToken(res.data.assessToken)
      get()
    })
}
  // 退出
  function logout() {
    clear();
  }

  // 清除用户
  function clear() {
    storage.remove("userInfo");
    storage.remove("token");
    token.value = "";
    info.value = undefined;
  }

  return {
    token,
    setToken,
    info,
    get,
    set,
    login,
    logout
  };
});

export default useUserStore;
