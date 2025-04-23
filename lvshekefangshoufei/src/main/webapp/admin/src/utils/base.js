const base = {
    get() {
        return {
            url : "http://localhost:8080/lvshekefangshoufei/",
            name: "lvshekefangshoufei",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/lvshekefangshoufei/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "旅社客房收费管理系统"
        } 
    }
}
export default base
