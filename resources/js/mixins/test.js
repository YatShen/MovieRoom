export const mixinTest1 = {
    created() {
        this.hello();
    },
    methods: {
        hello() {
            console.log('mixinTest1');
        }
    }
};