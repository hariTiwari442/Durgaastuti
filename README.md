# माँ स्तुति

A simple static website for the Maa Stuti. No build step, just HTML, CSS and JS.

## Publish on GitHub Pages

1. Create a new GitHub repository (e.g. `maa-stuti`) and push these files to the `main` branch.
2. In the repo go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`, then **Save**.
4. After a minute the site is live at `https://<your-username>.github.io/maa-stuti/`.

## Edit the text

All verses are in `index.html`. Each couplet is a `<p class="couplet">` and each refrain is a `<p class="refrain">`.
