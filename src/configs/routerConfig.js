import Tables from "../components/Tables";
import Login from "../components/Login";
import { postTableSettings } from "../configs/Tables/Posts";
import { commentsTableSettings } from "../configs/Tables/Comments";
import { usersTableSettings } from "../configs/Tables/Users";
export const routerConfig =  [
    { path: "/login", name: "Login", component: Login },
    { path: "/", name: "App", component: Tables, auth: true, tableName: "Posts", tableSettings: postTableSettings },
    { path: "/comments", name: "Comments", component: Tables, auth: true, tableName: "Comment", tableSettings: commentsTableSettings },
    { path: "/users", name: "Users", component: Tables, auth: true, tableName: "_User", tableSettings: usersTableSettings },
];