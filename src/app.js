import './app.styl'

import Angular from 'angular'
import AppTemplate from './app.html'

const app = () => {
  return {
    template: AppTemplate,
    controller: 'AppController',
    controllerAs: 'data'
  }
}

class AppController {
  constructor () {
    this.url = 'https://princesspoopan.com'
  }
}

Angular.module('app', [])
  .directive('app', app)
  .controller('AppController', AppController)

export default 'app'
