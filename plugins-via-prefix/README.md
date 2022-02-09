# Redwood Tests

## Todo

- [ ] provision a plugin space in admin pages (add a section/tab for the detials)
- [x] add model "views" (ala maintenance-status) i.e. general-view, sizes-view (done one2one)
- [ ] add model "views" - list - one2many - i.e. prices
- [x] add authentication
- [ ] add authorization (RBAC)
- [ ] secure some routes depends on the authorization
- [ ] create a dev guide/wf, [something like this](https://github.com/echobind/bisonapp/blob/canary/docs/devWorkflow.md)
- [x] add ~~portal~~ home/non-admin view
- [ ] rename PortalUnits to PortalUnitList and PortalUnitListItem accordingly
- [ ] add deletedAt flag to models
- [x] add fileupload (we'll use filestack.com for now) - see if we have to roll our own solution in the future
- [ ] find a good way to assign assets/images to db-resources (im thinking of an upload and tag approach)
- [ ] start figuring out how to do db searches (index maybe? or a search term field?) - go elasticsearch/sonic
- [ ] use thumbnail/media obj and not straight-up string
- [ ] add dropdown select for relationship fields
- [ ] add filter to pages
- [ ] add pagination (connection)
- [x] add pagination (limit x offset)
- [ ] setup the Connection concept to one of the models (reread the suggested naming convention in the latter part of https://www.apollographql.com/blog/graphql/explaining-graphql-connections/)
- [ ] do we have so much data we need "connections"? how about page numbering?
- [ ] decide how and when to use mantine's layouts (center, container, grid, etc)
- [ ] document how to use the errors https://redwoodjs.com/docs/graphql.html#redwood-errors
- [ ] (low prio) override styles of scaffold, see `y rw setup generate scaffold`
- [ ] (low prio) setup husky, lint-staged, trunkio
- [ ] (low prio) setup sentry
- [ ] figure how to do local user state (i.e. preferences)
- [ ] discuss Cell events/exports/lifecycle-hooks https://redwoodjs.com/docs/cells#usage
- [ ] use the `input PageOffsetInput` pattern and use a standard `queryStuff(input: PageOffsetInput): Some[]` param
- [ ] use CUID as graphql ID for ease of caching (read more about global unique ids)
- [ ] separate plural roots, which accept a single args of arrays, from roots ending in `list` to denote pagination possibilities https://graphql.org/learn/global-object-identification/#fields
- [ ] separate set of gqls for admin and ui
- [ ] try commons workspace packages
- [ ] `yarn add tiny-invariant`


## Plugin Centric Dev

features are either a plugin, or part of core.

## type of item collection

they should either be a List (paged by offset x limit) or a Connection (paged by cursor)

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
