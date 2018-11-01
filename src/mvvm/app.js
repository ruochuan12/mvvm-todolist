let vm = new MVVM({
    el: '#app',
    data: {
        title: 'todolist',
        inputVal: '',
        list: [],
    },
    methods: {
        add(){
            console.log('add');
            this.list.push(this.inputVal);
        },
        changeTitle(){
            setTimeout(() => {
                this.title = 'todolist-changed';
            }, 3000);
        },
    },
    mounted(){
        this.changeTitle();
    }
});
console.log(vm);
console.log(vm.inputVal, 'vm.inputVal');
console.log(vm.list, 'vm.list');