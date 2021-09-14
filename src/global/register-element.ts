import { App } from 'vue'
import 'element-plus/lib/theme-chalk/base.css'
import {
  ElButton,
  ElAside,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio
} from 'element-plus'

const components = [ElButton, ElAside, ElForm, ElFormItem, ElInput, ElRadio]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
