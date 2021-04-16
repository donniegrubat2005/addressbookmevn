import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/dashboard",
            name: "dashboard",
            meta: {
                title: "Dashboard",
                description: "This is dashboard page"
            },
            component: () => import("./components/pages/phonebook/Dashboard.vue")
        },
        {
            path: "/list",
            name: "phonebooklist",
            meta: {
                title: "Phonebook List",
                description: "This is phonebook list page"
            },
            component: () => import("./components/pages/phonebook/List.vue")
        },

        {
            path: "/create",
            name: "create",
            meta: {
                title: "Create New Contact",
                description: "This is create contact page"
            },
            component: () => import("./components/pages/phonebook/Create.vue")
        },
      
    ],
    linkActiveClass: "active",
    linkExactActiveClass: "active"
});
export default router;
