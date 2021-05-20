/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";
import store from '../store/index';
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

Vue.use(Vuex);
Vue.use(VueRouter);

function guard(to, from, next){
  if(store.state.auth.loggedIn) {
    if(to.name === 'Login') {
        next('/home');
    } else {
      next(); // allow to enter route
    }
  } else{
      if(to.name !== 'Login') {
          next('/login');
      } else {
        next(); // allow to enter route
      }
  }
}

const routes = [
  {
		path: '*',
		meta: {
			pageTitle: 'No Component Found'
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/noComponentFound.vue")
	},
  {
    path: "/",
    redirect: to => {
      return '/login';
    }
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      pageTitle: 'Login',
      public: true,
		},
    // beforeEnter: guard,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue")
  },
  {
    path: "/register",
    name: "Register",
    meta: {
      pageTitle: 'Register',
      public: true,
    },
    // beforeEnter: guard,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import("../views/Register.vue")
  },
  {
    path: "/forget-password",
    name: "ForgetPassword",
    meta: {
      pageTitle: 'Forget Password',
      public: true,
		},
    // beforeEnter: guard,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "ForgetPassword" */ "../views/forget-password.vue")
  },
  {
    path: "/password/reset",
    name: "password.reset",
    meta: {
      pageTitle: 'Reset Password',
      public: true,
		},
    // beforeEnter: guard,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "ForgetPassword" */ "../views/reset-password.vue")
  },
  {
    path: "/home",
    name: "Home",
    // beforeEnter: guard,
    meta: {
      pageTitle: 'Home',
      public: false,
		},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/dashboard/dashboard_index.vue")
  },
  {
    path: "/profile-settings",
    name: "Profile.Settings",
    // beforeEnter: guard,
    meta: {
      pageTitle: 'Profile Settings',
      public: false,
		},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/profile-settings/user")
  },
  {
    path: "/all-notifications",
    name: "All.Notification",
    // beforeEnter: guard,
    meta: {
      pageTitle: 'Notifications',
      public: false,
		},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/all-notifications/index-notification")
  },
  // {
  //   path: "/employees",
  //   name: "Employees",
  //   // beforeEnter: guard,
  //   meta: {
  //     pageTitle: 'Employees',
  //     public: false,
	// 	},
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "employees" */ "../views/employee/emp_index.vue")
  // },
  // {
  //   path: "/employees/create",
  //   name: "employees.create",
  //   // beforeEnter: guard,
  //   meta: {
  //     pageTitle: 'Create Employees',
  //     public: false,
	// 	},
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "employees.create" */ "../views/employee/create.vue")
  // },
  // {
  //   path: "/employees/edit/:employee_id",
  //   name: "employees.edit",
  //   // beforeEnter: guard,
  //   meta: {
  //     pageTitle: 'Edit Employees',
  //     public: false,
	// 	},
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "employees.edit" */ "../views/employee/edit.vue")
  // },
  {
    path: "/servers",
    name: "servers",
    // beforeEnter: guard,
    meta: {
      pageTitle: 'Servers',
      public: false,
		},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "packages" */ "../views/packages/package_index.vue")
  },
  {
    path: "/servers/create",
    name: "servers.create",
    // beforeEnter: guard,
    meta: {
      pageTitle: 'Add Server',
      public: false,
		},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "packages.create" */ "../views/packages/create.vue")
  },
  {
    path: "/packages/edit/:package_id",
    name: "packages.edit",
    // beforeEnter: guard,
    meta: {
      pageTitle: 'Edit Packages',
      public: false,
		},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "packages.edit" */ "../views/packages/edit.vue")
  },
  {
    path: "/packages/:package_id",
    name: "packages.show",
    // beforeEnter: guard,
    meta: {
      pageTitle: 'Package Details',
      public: false,
		},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "packages.show" */ "../views/packages/show.vue")
  },
  {
    path: "/package-form/:package_id",
    name: "Package Form",
    meta: {
      pageTitle: 'Package Form',
      public: true,
		},
    // beforeEnter: guard,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/packages/no-secure-form/index-pack-form")
  },
  {
    path: "/projects",
    name: "projects",
    // beforeEnter: guard,
    meta: {
      pageTitle: 'Projects Listing',
      public: false,
		},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "projects" */ "../views/projects/project_index")
  },
  {
    path: "/projects/create",
    name: "projects.create",
    // beforeEnter: guard,
    meta: {
      pageTitle: 'Create Project',
      public: false,
		},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "projects.create" */ "../views/projects/create")
  },
  // {
  //   name: 'projects.messages.messagedetails',
  //   path: '/projects/show/:project_id/messages/show/:thread_id',
  //   meta: {
  //     pageTitle: 'Project Messages - Details',
  //     public: false,
  //   },
  //   component: () =>
  //   import(/* webpackChunkName: "projects.messages.messagedetails" */ "../views/projectMessages/project_messages"),
  // },
  {
    path: "/projects/edit/:project_id",
    name: "projects.edit",
    // beforeEnter: guard,
    meta: {
      pageTitle: 'Edit Project',
      public: false,
		},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "projects.edit" */ "../views/projects/edit")
  },
  {
    path: "/projects/show/:project_id",
    // beforeEnter: guard,
    meta: {
      pageTitle: 'Project Details',
      public: false,
    },
    children: [
			{
				name: 'projects.overview',
				path: '',
				meta: {
          pageTitle: 'Project - Overview',
          public: false,
        },
        component: () =>
        import(/* webpackChunkName: "projects.overview" */ "../views/projects/childrens/overview_index")
			},
			{
				name: 'projects.files',
				path: 'files',
				meta: {
					pageTitle: 'Project - Files',
          public: false,
        },
        component: () =>
        import(/* webpackChunkName: "projects.files" */ "../views/projects/childrens/files_index")
			},
			{
				name: 'projects.messages',
				path: 'messages',
				meta: {
					pageTitle: 'Project - Messages',
          public: false,
        },
        component: () =>
        import(/* webpackChunkName: "projects.messages" */ "../views/projects/childrens/messages_index")
      },
      {
				name: 'projects.others.settings',
				path: 'other-settings',
				meta: {
					pageTitle: 'Project - Settings',
          public: false,
        },
        component: () =>
        import(/* webpackChunkName: "projects.others.settings" */ "../views/projects/childrens/other-settings.vue")
			},
			{
				path: 'invoices',
				meta: {
					pageTitle: 'Project - Invoices',
          public: false,
        },
        component: () =>
        import(/* webpackChunkName: "invoice.listing" */ "../views/projects/childrens/invoice_index"),
        children: [
          {
            name: 'invoice.listing',
            path: '',
            meta: {
              pageTitle: 'Project Invoice - Listings',
              public: false,
            },
            component: () =>
            import(/* webpackChunkName: "invoice.listing" */ "../views/projects/childrens/invoices/index"),
          },
          {
            name: 'invoices.create',
            path: 'create-invoice',
            meta: {
              pageTitle: 'Project Invoice - Create',
              public: false,
            },
            component: () =>
            import(/* webpackChunkName: "invoice.create" */ "../views/projects/childrens/invoices/create"),
          },
          {
            name: 'invoices.edit',
            path: 'edit-invoice/:invoice_id',
            meta: {
              pageTitle: 'Project Invoice - Edit',
              public: false,
            },
            component: () =>
            import(/* webpackChunkName: "invoice.edit" */ "../views/projects/childrens/invoices/edit"),
          },
        ],

			},
		],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "project.show" */ "../views/projects/show")
  },
  // {
  //   name: 'projects.main.invoice',
  //   path: '/invoices',
  //   meta: {
  //     pageTitle: 'Invoices',
  //     public: false,
  //   },
  //   component: () =>
  //   import(/* webpackChunkName: "projects.main.invoice" */ "../views/invoices/invoice_index"),
  // },
  // {
  //   name: 'projects.main.invoice.create',
  //   path: '/invoices/create-invoice',
  //   meta: {
  //     pageTitle: 'Create Invoices',
  //     public: false,
  //   },
  //   component: () =>
  //   import(/* webpackChunkName: "projects.main.invoice.create" */ "../views/invoices/create-invoice"),
  // },
  // {
  //   name: 'projects.main.invoice.edit',
  //   path: '/invoices/edit-invoice/:invoice_id',
  //   meta: {
  //     pageTitle: 'Edit Invoices',
  //     public: false,
  //   },
  //   component: () =>
  //   import(/* webpackChunkName: "projects.main.invoice.edit" */ "../views/invoices/edit-invoice"),
  // },
  // {
  //   name: 'projects.invoice.projectinvoicedetails',
  //   path: '/invoices/show/:invoice_id',
  //   meta: {
  //     pageTitle: 'Project Invoice - Details',
  //     public: false,
  //   },
  //   component: () =>
  //   import(/* webpackChunkName: "invoice.invoicedetails" */ "../views/invoices/showinvoice"),
  // },
  // {
  //   name: 'projects.invoice.invoicedetails',
  //   path: '/projects/show/:project_id/invoices/show/:invoice_id',
  //   meta: {
  //     pageTitle: 'Project Invoice - Details',
  //     public: false,
  //   },
  //   component: () =>
  //   import(/* webpackChunkName: "invoice.invoicedetails" */ "../views/invoices/showinvoice"),
  // },
  // {
  //   name: 'projects.messages.index',
  //   path: '/messages',
  //   meta: {
  //     pageTitle: 'Project Messages',
  //     public: false,
  //   },
  //   component: () =>
  //   import(/* webpackChunkName: "projects.messages.index" */ "../views/projectMessages/messages-index"),
  // },
  // {
  //   name: 'projects.messages.show.messages',
  //   path: '/messages/show/:thread_id',
  //   meta: {
  //     pageTitle: 'Project Messages',
  //     public: false,
  //   },
  //   component: () =>
  //   import(/* webpackChunkName: "projects.messages.index" */ "../views/projectMessages/project_messages"),
  // },
  // {
  //   name: 'brands',
  //   path: '/brands',
  //   meta: {
  //     pageTitle: 'Brands',
  //     public: false,
  //   },
  //   component: () =>
  //   import(/* webpackChunkName: "brands" */ "../views/brands/brand_index"),
  // },
  // {
  //   name: 'brands.create',
  //   path: '/brands/create',
  //   meta: {
  //     pageTitle: 'Crete Brand',
  //     public: false,
  //   },
  //   component: () =>
  //   import(/* webpackChunkName: "brands.create" */ "../views/brands/create-brand"),
  // },
  // {
  //   name: 'brands.edit',
  //   path: '/brands/edit/:brand_id',
  //   meta: {
  //     pageTitle: 'edit Brand',
  //     public: false,
  //   },
  //   component: () =>
  //   import(/* webpackChunkName: "brands.edit" */ "../views/brands/edit-brand"),
  // },
  // {
  //   name: 'project.status',
  //   path: '/project-status',
  //   meta: {
  //     pageTitle: 'Project Status',
  //     public: false,
  //   },
  //   component: () =>
  //   import(/* webpackChunkName: "project.status" */ "../views/project-status/status-index"),
  // },
  // {
  //   name: 'project.status.create',
  //   path: '/project-status/create',
  //   meta: {
  //     pageTitle: 'Create Project Status',
  //     public: false,
  //   },
  //   component: () =>
  //   import(/* webpackChunkName: "project.status.create" */ "../views/project-status/create"),
  // },
  // {
  //   name: 'project.status.edit',
  //   path: '/project-status/edit/:project_status_id',
  //   meta: {
  //     pageTitle: 'Edit Project Status',
  //     public: false,
  //   },
  //   component: () =>
  //   import(/* webpackChunkName: "project.status.edit" */ "../views/project-status/edit"),
  // },
  // {
  //   name: 'project.status.category',
  //   path: '/project-status-category',
  //   meta: {
  //     pageTitle: 'Project Status Category',
  //     public: false,
  //   },
  //   component: () =>
  //   import(/* webpackChunkName: "project.status.category" */ "../views/project-status-category/status-category-index"),
  // },
  // {
  //   name: 'project.status.category.create',
  //   path: '/project-status-category/create',
  //   meta: {
  //     pageTitle: 'Create Project Status Category',
  //     public: false,
  //   },
  //   component: () =>
  //   import(/* webpackChunkName: "project.status.category.create" */ "../views/project-status-category/create"),
  // },
  // {
  //   name: 'project.status.category.edit',
  //   path: '/project-status-category/edit/:project_status_category_id',
  //   meta: {
  //     pageTitle: 'Edit Project Status Category',
  //     public: false,
  //   },
  //   component: () =>
  //   import(/* webpackChunkName: "project.status.category.edit" */ "../views/project-status-category/edit"),
  // },
  // {
  //   path: '/settings',
  //   meta: {
  //     pageTitle: 'Settings',
  //     public: false,
  //   },
  //   component: () =>
  //   import(/* webpackChunkName: "settings" */ "../views/settings/settings-index"),
  //   children: [
	// 		{
	// 			name: 'settings.company.settings',
	// 			path: '',
	// 			meta: {
	// 				pageTitle: 'Settings - Company Settings',
  //         public: false,
  //       },
  //       component: () =>
  //       import(/* webpackChunkName: "settings.company.settings" */ "../views/settings/childrens/company_index")
	// 		},
	// 		{
	// 			name: 'settings.profile.settings',
	// 			path: 'profile',
	// 			meta: {
	// 				pageTitle: 'Settings - Profile Settings',
  //         public: false,
  //       },
  //       component: () =>
  //       import(/* webpackChunkName: "settings.profile.settings" */ "../views/settings/childrens/profile-settings")
  //     },
  //     {
	// 			name: 'settings.profile.currency',
	// 			path: 'currency',
	// 			meta: {
	// 				pageTitle: 'Settings - Currency Settings',
  //         public: false,
  //       },
  //       component: () =>
  //       import(/* webpackChunkName: "settings.profile.currency" */ "../views/settings/childrens/currency-settings")
  //     },
  //     {
	// 			name: 'settings.profile.roles.permission',
	// 			path: 'roles.permission',
	// 			meta: {
	// 				pageTitle: 'Settings - Roles & Permission Settings',
  //         public: false,
  //       },
  //       component: () =>
  //       import(/* webpackChunkName: "settings.profile.roles.permission" */ "../views/settings/childrens/roles-permission-settings")
	// 		},
	// 	],
  // },

  // Leads
  // {
  //   name: 'leads',
  //   path: '/leads',
  //   meta: {
  //     pageTitle: 'Leads',
  //     public: false,
  //   },
  //   component: () =>
  //   import(/* webpackChunkName: "leads" */ "../views/leads/index"),
  // },
  // {
  //   name: 'leads.create',
  //   path: '/leads/create',
  //   meta: {
  //     pageTitle: 'Create Lead',
  //     public: false,
  //   },
  //   component: () =>
  //   import(/* webpackChunkName: "leads.create" */ "../views/leads/create"),
  // },
  // {
  //   name: 'leads.edit',
  //   path: '/leads/edit/:lead_id',
  //   meta: {
  //     pageTitle: 'Edit Lead',
  //     public: false,
  //   },
  //   component: () =>
  //   import(/* webpackChunkName: "leads.edit" */ "../views/leads/edit"),
  // },
  // {
  //   name: 'leads.importer',
  //   path: '/leads-importer',
  //   meta: {
  //     pageTitle: 'Lead Importer',
  //     public: false,
  //   },
  //   component: () =>
  //   import(/* webpackChunkName: "leads.importer" */ "../views/leads/lead-imported"),
  // },
  // Lead Status
  // {
  //   name: 'leads.status',
  //   path: '/leads-status',
  //   meta: {
  //     pageTitle: 'Lead Status',
  //     public: false,
  //   },
  //   component: () =>
  //   import(/* webpackChunkName: "leads.status" */ "../views/lead-status/lead-status-index"),
  // },
  // {
  //   name: 'leads.status.create',
  //   path: '/leads-status/create',
  //   meta: {
  //     pageTitle: 'Lead Status - Create',
  //     public: false,
  //   },
  //   component: () =>
  //   import(/* webpackChunkName: "leads.status.create" */ "../views/lead-status/create"),
  // },
  // {
  //   name: 'leads.status.edit',
  //   path: '/leads-status/edit/:lead_status_id',
  //   meta: {
  //     pageTitle: 'Lead Status - Edit',
  //     public: false,
  //   },
  //   component: () =>
  //   import(/* webpackChunkName: "leads.status.edit" */ "../views/lead-status/edit"),
  // },
  // {
  //   name: 'leads.show',
  //   path: '/leads/:lead_id',
  //   meta: {
  //     pageTitle: 'Leads Detail',
  //     public: false,
  //   },
  //   component: () =>
  //   import(/* webpackChunkName: "leads.show" */ "../views/leads/show"),
  // },

  // Lead Steps
  // {
  //   name: 'leads.steps',
  //   path: '/leads-steps',
  //   meta: {
  //     pageTitle: 'Lead Steps',
  //     public: false,
  //   },
  //   component: () =>
  //   import(/* webpackChunkName: "leads.steps" */ "../views/lead-steps/lead-steps-index"),
  // },
  // {
  //   name: 'leads.steps.create',
  //   path: '/leads-steps/create',
  //   meta: {
  //     pageTitle: 'Lead Steps - Create',
  //     public: false,
  //   },
  //   component: () =>
  //   import(/* webpackChunkName: "leads.steps.create" */ "../views/lead-steps/create"),
  // },
  // {
  //   name: 'leads.steps.edit',
  //   path: '/leads-steps/edit/:lead_steps_id',
  //   meta: {
  //     pageTitle: 'Lead Status - Edit',
  //     public: false,
  //   },
  //   component: () =>
  //   import(/* webpackChunkName: "leads.steps.edit" */ "../views/lead-steps/edit"),
  // },

  // Lead Steps
  // {
  //   name: 'leads.source',
  //   path: '/leads-source',
  //   meta: {
  //     pageTitle: 'Lead Source',
  //     public: false,
  //   },
  //   component: () =>
  //   import(/* webpackChunkName: "leads.source" */ "../views/lead-source/lead-source-index"),
  // },
  // {
  //   name: 'leads.source.create',
  //   path: '/leads-source/create',
  //   meta: {
  //     pageTitle: 'Lead Source - Create',
  //     public: false,
  //   },
  //   component: () =>
  //   import(/* webpackChunkName: "leads.source.create" */ "../views/lead-source/create"),
  // },
  // {
  //   name: 'leads.source.edit',
  //   path: '/leads-source/edit/:lead_source_id',
  //   meta: {
  //     pageTitle: 'Lead Source - Edit',
  //     public: false,
  //   },
  //   component: () =>
  //   import(/* webpackChunkName: "leads.source.edit" */ "../views/lead-source/edit"),
  // },
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
