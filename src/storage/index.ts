import { ITheme } from '@/store/theme/interface'
import { themeConfig } from '@/store/theme/config'

export default {
  /**
   * 获取
   * @param {*} key 关键字
   */
  get(key: string): any {
    const json: any = window.localStorage.getItem(key)
    return JSON.parse(json)
  },
  /**
   * 设置
   * @param {*} key 关键字
   * @param {*} value 值
   */
  set(key: string, value: any): void {
    window.localStorage.setItem(key, JSON.stringify(value))
  },
  /**
   * 删除
   * @param {*} key 关键字
   */
  remove(key: string) {
    window.localStorage.removeItem(key)
  },

  /**
   * 清理
   */
  clear() {
    window.localStorage.clear()
  },
  /**
   * 获得语言
   */
  getLanguage(): string {
    return window.localStorage.getItem('lang') || 'zh-CN'
  },
  /**
   * 设置语言
   * @param value
   */
  setLanguage(value: string) {
    window.localStorage.setItem('lang', value)
  },
  getTheme(): ITheme {
    const json: any = window.localStorage.getItem('theme')
    return (JSON.parse(json) as ITheme) || themeConfig
  },

  setTheme(value: ITheme) {
    window.localStorage.setItem('theme', JSON.stringify(value))
  },

  removeTheme() {
    window.localStorage.removeItem('theme')
  },
  getSidebarOpened(): boolean {
    const value: any = window.localStorage.getItem('sidebarOpened')
    return (value as boolean) || true
  },

  setSidebarOpened(value: boolean) {
    window.localStorage.setItem('sidebarOpened', String(value))
  },
  getComponentSize(): string {
    return window.localStorage.getItem('componentSize') || 'default'
  },

  setComponentSize(value: string) {
    window.localStorage.setItem('componentSize', value)
  }
}
