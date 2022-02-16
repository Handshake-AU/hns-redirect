const domain = document.currentScript.getAttribute('domain');
if (location.hostname != domain) {
  console.info(`Redirecting to the HNS domain ${domain}!`);
  location.href = `${location.protocol}//${domain}${location.pathname}`;
} else {
  console.info('Already using HNS domain, no redirect needed!');
}