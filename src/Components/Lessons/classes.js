class Filter {
    constructor(filterObject, router) {
        this.filterObject = filterObject;
        this.router = router
    }

    pushToQueryString() {
        this.router.push(filterObject)
    }
}
const { register, handleSubmit } = useForm({
    defaultValues:{age:19}
});

const router = {}
const usersPage = new Filter('benjamin', '100', router)
const computersPage = new Filter('benjamin', '100', router)

const serialize = function (obj) {
    let str = [];
    for (var p in obj)
        if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
    return str.join("&");
}

console.log(serialize({
    foo: "hi there",
    bar: "100%"
}));