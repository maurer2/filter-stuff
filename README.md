# filter-stuff

Evaluation of multiple approaches for filtering a list in Next15 and React19. Reuses some dummy data from an old tech test: https://github.com/maurer2/filter-sort-techtest/blob/master/public/db.json.

- [ ] Calculate all filtered data in a server component using query params and only send results for the current page back to the client as rendered html. Navigate to prev and next results page via router and calculate the data on the server again
- [ ] Calculate all filtered data in a server ~~action~~ function using query params and send results for all pages back to client as JSON and handle the display logic and pagination client side
- [ ] Calculate all filtered data in a server function using query params and send results for the current page back to the client as JSON to be used as initial query data in Tanstack query. Query server function via Tanstack query to get the data for the next and prev page
- [ ] Calculate all filtered data in a server function using query params and send and send results for all pages to the client as JSON. Prime the cache with said data in Tanstack query.
