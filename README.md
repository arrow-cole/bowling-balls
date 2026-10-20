# Bowling collection — Ruby site

Ruby ERB templates generate this static site. The Gemfile provides WEBrick for local preview; the build itself uses Ruby's standard library.

## Run locally

```sh
bundle install
ruby bin/build
bundle exec ruby bin/serve
```

Open http://127.0.0.1:4000. Rebuild after editing; refresh the browser. Set `PORT=4001` to use another port. A maintained Ruby 3.x is recommended; the build was also checked with the available Ruby 2.6.10.

## Edit content

- `data/balls.json`: active collection, specifications, images, and existing detail URLs.
- `data/bag.json`: IDs included in the tournament bag.
- `templates/layout.erb`: shared navigation and page shell.
- `templates/collection.erb` and `templates/detail.erb`: active collection and detail layouts.
- `templates/pages/`: other pages, including retired/sold records and contact form.
- `assets/site.css` and `assets/site.js`: responsive styling and client-side search/filtering.

The contact form retains the existing Formspree endpoint. Sending was not tested to avoid submitting a message.

## Hosting

Run `ruby bin/build`, then publish the contents of `_site/` as the website root. Existing `.html` paths and directory index paths are preserved. Hosts that previously supported extensionless URLs should retain that setting. No Ruby server is needed in production. Do not publish the source directory in place of `_site/`.

Contact: Balls@mibowling.us
