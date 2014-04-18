var gith = require('gith').create(3000);
gith({
  repo: 'chetanme/division-page-data',
  branch: 'master',
  file: /data\/(\w+).csv/
}).on('file:modify', function( payload ) {
  console.log( 'Post-receive happened!' );
  console.log(payload);
});