import storage from "@/storage";
import { ITheme } from "@/store/theme/interface";
import { themeConfig } from "@/store/theme/config";

// »º´æ
class Cache {
  getToken = (): string => {
    return storage.get("token") || "";
  };

  setToken = (value: string) => {
    storage.set("token", value);
  };

  getSidebarOpened = (): boolean => {
    return storage.get("sidebarOpened") || false;
  };

  setSidebarOpened = (value: boolean) => {
    storage.set("sidebarOpened", value);
  };

  getLanguage = (): string => {
    return storage.get("lang") || "zh-CN";
  };

  setLanguage = (value: string) => {
    storage.set("lang", value);
  };

  getComponentSize = (): string => {
    return storage.get("componentSize") || "default";
  };

  setComponentSize = (value: string) => {
    storage.set("componentSize", value);
  };

  getTheme = (): ITheme => {
    return (storage.get("theme") as ITheme) || themeConfig;
  };

  setTheme = (value: ITheme) => {
    storage.set("theme", value);
  };

  removeTheme = () => {
    storage.remove("theme");
  };
}

export default new Cache();
