import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.jsx"),
    route("/tos", "routes/tos/tos.jsx"),
    route("/aup", "routes/acceptable_policy/policy.jsx")
] satisfies RouteConfig;
