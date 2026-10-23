# Bowling collection — Ruby site

Ruby ERB templates generate this static site. The Gemfile provides WEBrick for local preview; the build itself uses Ruby's standard library.

## Run locally

```sh
bundle install
bundle exec ruby bin/serve
```

Open http://127.0.0.1:4000. The preview builds on startup, watches source files, and automatically refreshes the browser after successful saves. If an edit breaks the build, the last working preview stays available and shows an error notice; fix the file and save again. Restart the server after changing bin/serve. Each successful build recreates `_site/`, so keep source files and original assets outside that generated folder. Set `PORT=4001` to use another port. A maintained Ruby 3.x is recommended; the build was also checked with the available Ruby 2.6.10.

## Edit content

- `data/balls.json`: active collection, specifications, images, and existing detail URLs.
- `data/bag.json`: IDs included in the tournament bag.
- `templates/layout.erb`: shared navigation and page shell.
- `templates/collection.erb` and `templates/detail.erb`: active collection and detail layouts.
- `templates/pages/`: standalone pages, including retired/sold records and the contact form. Collection, tournament, and active ball routes are generated directly from data, without duplicate page files.
- `assets/site.css` and `assets/site.js`: responsive styling and client-side search/filtering.

The contact form retains the existing Formspree endpoint. Sending was not tested to avoid submitting a message.

## Hosting

Run `ruby bin/build`, then publish the contents of `_site/` as the website root. Page links use clean directory URLs such as `/tour/` and `/Main/ball1/`. The build writes an `index.html` inside each directory, so ordinary static hosting works without rewrite rules. Old `.html` bookmarks redirect to the matching clean URL. No Ruby server is needed in production. Do not publish the source directory in place of `_site/`.

Contact: Balls@mibowling.us
