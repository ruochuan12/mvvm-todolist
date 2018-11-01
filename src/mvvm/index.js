function isObject(obj){
    return obj !== null && typeof obj === 'object';
}
console.log('index.js');
class MVVM{
    constructor(options){
        this.$options = options;
        this.$el = options.el;
        this._data = options.data;
        this._methods = options.methods;
        // this._mounted = options.mounted;
        // 代理数据
        this.proxy('_data');
        // 代理事件
        this.proxy('_methods');
        // 监控数据变化
        this.observe(this._data);
        new Complie({ el: this.$el, vm: this});
        options.mounted.call(this);
    }
    proxy(sourceKey){
        Object.keys(this[sourceKey]).forEach((key) => {
            Object.defineProperty(this, key, {
                get(){
                    return this[sourceKey][key];
                },
                set(val){
                    this[sourceKey][key] = val;
                }
            });
        });
    }
    observe(obj){
        const that = this;
        Object.keys(obj).forEach((key) => {
            let oldVal = obj[key];
            Object.defineProperty(obj, key, {
                get(){
                    console.log(`你访问了${key}, 它的值是${oldVal}`);
                    return oldVal;
                },
                set(newVal){
                    if(newVal !== oldVal){
                        if(isObject(newVal)){
                            that.observe(newVal);
                        }
                        console.log(`你设置了${key}，它的旧值是${oldVal}，新值是${newVal}`);
                        oldVal = newVal;
                    }
                }
            });
        });
    }
}