# hns-redirect
Redirect ICANN domain to Handshake, this allows anyone with a Handshake resolver to view your handshake site.

Redirect ICANN Domains to handshake by adding the below code to your ICANN website. Replace hnsdomain with the domain you want your users redirected to

## Redirect to http handshake site
`<script src="https://gday.hnsau/redirect.js" domain="hnsdomain"></script>`

## Redirect to https handshake site
`<script src="https://gday.hnsau/handshake.js" domain="hnsdomain"></script>`
Note. This will redirect to an browser error page if your requested domain doesn't support ssl/https

## Resolvers supported
This method requires DANE, to connect to a https/ssl handshake domain.
Fingertip is currently the best resolver for this, [Get fingertip here](https://impervious.com/fingertip.html)
