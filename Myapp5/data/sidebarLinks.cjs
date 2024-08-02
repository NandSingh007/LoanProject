const sidebarLinks = [
  { name: "Dashboard", route: "/home", icon: "bi bi-grid", active: true },

  {
    name: "User",
    route: "/player",
    icon: "bi bi-people-fill",
    active: false
  },
  {
    name: "Company Profile",
    route: "/rech_pe",
    icon: "bi bi-people-fill",
    active: false
  },
  {
    name: "Profile",
    route: "/users-profile",
    icon: "bi bi-person",
    active: false
  },

  {
    name: "Processing",
    icon: "bi bi-bar-chart",
    active: false,
    submenu: [
      {
        name: "Request",
        route: "/with_re",
        icon: "bi bi-circle",
        active: false
      },
      {
        name: "Approval",
        route: "/with_app",
        icon: "bi bi-circle",
        active: false
      },
      {
        name: "Reject",
        route: "/with_rej",
        icon: "bi bi-circle",
        active: false
      }
    ]
  },
  {
    name: "Security",
    icon: "bi bi-bar-chart",
    active: false,
    submenu: [
      {
        name: "Request",
        route: "/sec_re",
        icon: "bi bi-circle",
        active: false
      },
      {
        name: "Approval",
        route: "/sec_app",
        icon: "bi bi-circle",
        active: false
      },
      {
        name: "Reject",
        route: "/sec_rej",
        icon: "bi bi-circle",
        active: false
      }
    ]
  },
  {
    name: "Setting",
    icon: "bi bi-gear",
    active: false,
    submenu: [
      {
        name: "Loan Type",
        route: "/Bonus",
        icon: "bi bi-circle",
        active: "0"
      },
      {
        name: "Packages",
        route: "/Refer",
        icon: "bi bi-circle",
        active: "0"
      }
      // {
      //   name: "Refer & Earn",
      //   route: "/Refer",
      //   icon: "bi bi-circle",
      //   active: false
      // },
    ]
  },
  {
    name: "Logout",
    route: "/logout",
    icon: "bi bi-question-circle",
    active: false
  }
  // Add more top-level or submenu items here
];

module.exports = sidebarLinks;
