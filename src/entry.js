// Import components
import components from './components/index'

const install = function(Vue){
  if(install.installed) return;
  install.installed = true;
  Object.keys(components).forEach(name => {
    Vue.component(name, components[name]);
  });
};

/** 支持使用标签方式引入 */
if(typeof window != 'undefined' && window.Vue){
  install(window.Vue)
}

export default {
  install,
  ...components
}
