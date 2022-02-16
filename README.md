# hns-redirect
Redirect ICANN domain to Handshake, this allows anyone with a Handshake resolver to view your handshake site.

Redirect ICANN Domains to handshake by adding the below code to your ICANN website. Replace hnsdomain with the domain you want your users redirected to

## Redirect to handshake site
Just upload the `redirect.js` file to your webserver and add the following code snippet to the `<head></head>` section of the pages that should be redirected to the HNS domain (by adding it to the `<head></head>` section the `<body></body>` section won't have to be loaded first). Replace `HNSTOREDIRECT` with your HNS domain with the path to the `redirect.js` file and replace `HNSDOMAIN` with your HNS domain.
```html
	<script src="HNSTOREDIRECT" domain="HNSDOMAIN"></script>
```

## Resolvers supported
This method requires DANE, to connect to a https/ssl handshake domain.
Fingertip is currently the best resolver for this, [Get fingertip here](https://impervious.com/fingertip.html)
