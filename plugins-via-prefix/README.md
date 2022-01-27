# Redwood Tests

## Todo

- [ ] provision a plugin space in admin pages
- [ ] add model "views" (ala maintenance-status) i.e. general-view, sizes-view
- [x] add authentication
- [ ] add authorization (RBAC)
- [ ] secure some routes depends on the authorization
- [ ] create a dev guide/wf, [something like this](https://github.com/echobind/bisonapp/blob/canary/docs/devWorkflow.md)
- [x] add portal view
- [ ] rename PortalUnits to PortalUnitList and PortalUnitListItem accordingly
- [ ] add deletedAt flag to models

## Plugin Centric Dev

features are either a plugin, or part of core.

## Getting Started

- [Tutorial](https://redwoodjs.com/tutorial/welcome-to-redwood): getting started and complete overview guide.
- [Docs](https://redwoodjs.com/docs/introduction): using the Redwood Router, handling assets and files, list of command-line tools, and more.
- [Redwood Community](https://community.redwoodjs.com): get help, share tips and tricks, and collaborate on everything about RedwoodJS.

### Setup

We use Yarn as our package manager. To get the dependencies installed, just do this in the root directory:

```terminal
yarn install
```

### Fire it up

```terminal
yarn redwood dev
```

Your browser should open automatically to `http://localhost:8910` to see the web app. Lambda functions run on `http://localhost:8911` and are also proxied to `http://localhost:8910/.redwood/functions/*`.
