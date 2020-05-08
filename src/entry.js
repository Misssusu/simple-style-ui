// Import Components
import Components from './components/index'


const components = {
  install(Vue){
    Object.keys(Components).forEach(name => {
      Vue.component(name, Components[name]);
    });
  }
};

export default components;
