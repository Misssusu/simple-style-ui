// Import Components
import Components from './components/index'


const components = {
  install(Vue){
    Object.keys(Components).forEach(name => {
      console.log(name);
      console.log(Components[name]);
      Vue.component(name, Components[name]);
    });
  }
};

export default components;
