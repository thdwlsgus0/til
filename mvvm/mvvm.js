const type = (target, type) => {
  if(typeof type === "string"){
    if(typeof target !== type) throw `invalid type ${target} : ${type}`
  }else if(!(target instanceof type)){
    throw `invalid type ${target} : ${type}`
  }
  return target;
}

const test = (arr, _arr = type(arr, Array)) => {
  console.log(arr);
}

const test2 = (a, b, c, _a = type(a, "string"), _b = type(b, "number"), _c = type(c, "boolean")) => {
  console.log(a,b,c);
}
test([1,2,3]);

test2("abc", 123, true);

const ViewModel = class {
  static #private = Symbol();
  static get (data) {
    return new ViewModel(this.#private, data);
  }
  styles = {};
  attributes = {};
  properties = {};
  events = {};
  constructor(checker, data) {
    if(checker !== ViewModel.#private) throw 'use ViewModel.get()!'
    Object.entries(data).forEach(([k,v])=>{
        switch(k){
          case 'styles': this.styles = v; break;
          case 'attributes': this.attributes = v; break;
          case 'properties': this.properties = v; break;
          case 'events': this.events = v; break;
          default: this[k] = v;
        }
    });
    Object.seal(this);
  }
}
const Binder = class {
  #items = new Set();
  add (v, _ = type(v, BinderItem)) { this.#items.add(v)}
  render(viewmodel, _ = type(viewmodel, ViewModel)){
    this.#items.forEach(item=>{
      const vm = type(viewmodel[item.viewmodel], ViewModel), el = item.el
      Object.entries(vm.styles).forEach(([k, v]) => el.style[k] = v)
      Object.entries(vm.attributes).forEach(([k, v]) => el.attribute[k] = v)
      Object.entries(vm.properties).forEach(([k, v]) => el[k] = v)
      Object.entries(vm.events).forEach(([k, v]) => el[`on${k}`] = e => v.call(el, e, viewmodel))
    })
  }
}
const Scanner = class {
  scan (el, _ = type(el, HTMLElement)){
    const binder = new Binder();
    this.checkItem(binder, el);
    const stack = [el.firstElementChild];

    // HTML 전체에 대한 순회
    let target;
    while (target = stack.pop()){
      this.checkItem(binder, target);
      if(target.firstElementChild) stack.push(target.firstElementChild);
      if(target.nextElementSibling) stack.push(target.nextElementSibling);
    }
    return binder;
  }
  checkItem(binder, el){
    const vm = el.getAttribute('data-viewmodel');
    if(vm) binder.add(new BinderItem(el, vm));
  }
}
const BinderItem = class {
  el; viewmodel;
  constructor(el, viewmodel, _0 = type(el, HTMLElement), _1 = type(viewmodel, 'string')){
    this.el = el;
    this.viewmodel = viewmodel;
    Object.freeze(this);
  }
}

const scanner = new Scanner();
const binder = scanner.scan(document.querySelector('#target'));

const getRandom = () => parseInt(Math.random() * 150) + 100;
const viewmodel2 = ViewModel.get({
   isStop: false,
   changeContents() {
     this.wrapper.styles.background = `rgb(${getRandom()}, ${getRandom()}, ${getRandom()})`;
     this.contents.properties.innerHTML = Math.random().toString(16).replace('.','');
     binder.render(viewmodel2);
   },
   wrapper: ViewModel.get({
     styles: {width: '50%', background: '#fff', cursor:'pointer'},
     events: {click(e, vm){vm.isStop = true}}
   }),
   title: ViewModel.get({
     properties: {innerHTML : 'Title'}
   }),
   contents: ViewModel.get({
     properties:{innerHTML:'Contents'}
   })
})
const f = () => {
  viewmodel2.changeContents();
  binder.render(viewmodel2)
  if (!viewmodel2.isStop) requestAnimationFrame(f)
}
requestAnimationFrame(f)