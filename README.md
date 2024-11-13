# Zania Challenge - React App

**Problem statement**: I need to render a set of items as cards, with a title and a thumbnail. When I click on the card, <br/> it should open an overlay, which can be closed by pressing escape key. Additionally, all the card items should support <br/> drag and drop functionality.

## Scope

FRONTEND DEVELOPER

---

## Approach and process

I broke down the task into pieces, and wrote some basic test cases based on the requirements to help focus on
<br/> only the required functionality, and then I built a skeleton first, followed by the drag-and-drop (DnD) functionality.

This way I validated DnD on a simple list of items first before building cards. Since the requirements didn't ask <br/> for a complex functionality, the inbuilt `onDrag*` react event handlers were enough.

After this, it's just styling things, mocking APIs and tying everything together.

Here's the complete step-by-step process

1. Start with some failing test cases for core functionalities.
1. Build a simple component that renders a list of items, using the mock data.
1. Style the component as cards using CSS. Use tailwind to make it more simpler and readable.
1. Display 3 items in first row, 2 items in 2nd row. A simple CSS grid is enough.
1. Build drag and Drop functionality using the `onDrag*` react event handlers. No need of external libraries.
1. Add a spinner component for initial loading and update test cases.
1. Find an API for CATs and load random images as thumbnails; loading bar should disappear.
1. All data is hardcoded and being statically imported, install `msw` as suggested, read up on it <br/> and set up a mock server for serving `card data` and `cat data`.
1. Add a simple image overlay that can be closed on pressing `Escape` or clicking away on the <br/> overlay or using the close button. Update test cases.
1. Bug fixing.
1. Test and add docker compose files
1. Update readme docs.

---

## Functionality

- The app allows us to drag and drop cards in any order, a background highlight and opacity change shows the active card.
- Clicking on any card opens the overlay, which can be closed using `Escape` key or the close button.

---

## Available Scripts

### If Docker is installed on your system

Simply run the following commands, and the application will be available on [http://localhost:5000]

> NOTE: If you want to run on some other port, it can be changed in the `docker-compose.yml` file;
> look for the setting ports: - "5000:3000" and replace the value "5000"

```sh
# to build the image first
docker-compose build
# to run the docker container
docker-compose up
```

### If Docker is NOT installed on your system

> NOTE: Node and Npm need to be installed. Not covering the installation for these.

In the project root directory, you can run:

```sh
# to install dependencies
npm install

# to start the application in dev mode
npm start

# to run the tests in interactive watch mode
# (open in a different shell to run in parallel to the application)
npm test
```

---

## Hypothetical API Design

For adding, removing and updating the elements.

I would start with the data structure; the mock data has a `type`, `title` and `position`. And then we also have the Cat GIF's for the thumbnail, say `imageURL` field.

Out of these values, the `position` field seems least likely to be useful in a large scalable dataset. A `weight` field may be more suitable to indicate which cards should be prioritized when displaying on UI.

The `type` field will be in a separate table(SQL)/collection(NoSQL). This will be joined/referenced in the table where we store the data with the `title`(unique), `imageURL` and `weight` fields.

Next, build the `CRUD` endpoints

```sh
GET /api/type/all => all type values
GET /api/type/:id => get type based on id
# I wouldn't enable PUT/PATCH methods for this as we can just delete/create a new type
POST /api/type => Creates a new `type`
DELETE /api/type

GET /api/details?type => All details matching a type
GET /api/details?name => Details matching a name
GET /api/details?weight => Details matching a name
PUT /api/details => using name/id
DELETE /api/details => using name/id

# maybe
GET /api/cat => all imageURLs

```

---

<!-- References -->

[http://localhost:5000]: http://localhost:5000
